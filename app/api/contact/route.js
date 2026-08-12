// import axios from 'axios';
// import { NextResponse } from "next/server";

// export async function POST(request) {
//   const payload = await request.json();

//   // Check if required fields are present
//   if (!payload.name || !payload.email || !payload.message) {
//     return NextResponse.json({
//       success: false,
//       message: "All fields are required!",
//     }, { status: 400 });
//   }

//   try {
//     // Sending email via EmailJS or any other service (not shown here)
//     // Ensure you have the code for sending the email here

//     return NextResponse.json({
//       success: true,
//       message: "Message sent successfully!",
//     }, { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({
//       message: "Message sending failed!",
//       success: false,
//     }, { status: 500 });
//   }
// };


import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payload = await request.json();

    const { name, email, message } = payload;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * Email sending is currently handled by EmailJS
     * in the client-side ContactWithoutCaptcha component.
     *
     * If you later want to move email sending to the server,
     * you can integrate Resend, Nodemailer, SendGrid, etc. here.
     */

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while processing your request.",
      },
      {
        status: 500,
      }
    );
  }
}