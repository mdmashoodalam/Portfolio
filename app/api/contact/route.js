import axios from 'axios';
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();

  // Check if required fields are present
  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json({
      success: false,
      message: "All fields are required!",
    }, { status: 400 });
  }

  try {
    // Sending email via EmailJS or any other service (not shown here)
    // Ensure you have the code for sending the email here

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Message sending failed!",
      success: false,
    }, { status: 500 });
  }
};
