"use server";
import fs from "fs";
import path from "path";

export async function submitContact(formData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      return { success: false, message: "Name, email, and message are required." };
    }

    const dataFilePath = path.join(process.cwd(), "store_data.json");
    
    let contacts = [];
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, "utf8");
      if (fileData) {
        contacts = JSON.parse(fileData);
      }
    }

    const newContact = {
      id: Date.now(),
      name,
      email,
      message,
      date: new Date().toISOString()
    };

    contacts.push(newContact);
    fs.writeFileSync(dataFilePath, JSON.stringify(contacts, null, 2));

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return { success: false, message: "Server error" };
  }
}
