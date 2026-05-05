import { NextResponse } from "next/server";
import connectMongo from "../../../lib/mongodb";
import Contact from "../../../models/Contact";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    console.log("URI:", process.env.MONGODB_URI); // debug

    await connectMongo();

    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    return NextResponse.json(
      { message: "Message sent successfully!", contact: newContact },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}