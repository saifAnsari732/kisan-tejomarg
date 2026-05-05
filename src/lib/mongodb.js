import mongoose from 'mongoose';
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectMongo() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env');
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    console.log("Connecting to MongoDB with URI starting with:", MONGODB_URI.substring(0, 20) + "...");

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("MongoDB connected successfully");
      return mongoose;
    }).catch(err => {
      console.error("MongoDB connection error:", err);
      cached.promise = null; // Reset promise on error so we can retry
      throw err;
    });
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectMongo;
