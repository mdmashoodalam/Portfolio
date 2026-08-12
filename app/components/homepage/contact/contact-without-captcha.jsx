// "use client";
// // @flow strict
// import { isValidEmail } from '@/utils/check-email';
// import emailjs from '@emailjs/browser';  
// import axios from 'axios';
// import { useState } from 'react';
// import { TbMailForward } from "react-icons/tb";
// import { toast } from 'react-toastify';

// function ContactWithoutCaptcha() {
//   const [error, setError] = useState({ email: false, required: false });
//   const [userInput, setUserInput] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const checkRequired = () => {
//     if (userInput.email && userInput.message && userInput.name) {
//       setError({ ...error, required: false });
//     }
//   };

//   const handleSendMail = async (e) => {
//     e.preventDefault();

//     if (!userInput.email || !userInput.message || !userInput.name) {
//       setError({ ...error, required: true });
//       return;
//     } else if (error.email) {
//       return;
//     } else {
//       setError({ ...error, required: false });
//     }

//     const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
//     const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
//     const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

//     try {
//       const res = await emailjs.send(serviceID, templateID, userInput, options);

//       if (res.status === 200) {
//         toast.success('Message sent successfully!');
//         setUserInput({
//           name: '',
//           email: '',
//           message: '',
//         });
//       }
//     } catch (error) {
//       toast.error(error?.text || "Failed to send message, try again later!");
//     }
//   };

//   return (
//     <div className="">
//       <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
//         Contact with me
//       </p>
//       <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
//         <p className="text-sm text-[#d3d8e8]">
//           {"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}
//         </p>
//         <div className="mt-6 flex flex-col gap-4">
//           <div className="flex flex-col gap-2">
//             <label className="text-base">Your Name: </label>
//             <input
//               className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
//               type="text"
//               maxLength="100"
//               required={true}
//               onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
//               onBlur={checkRequired}
//               value={userInput.name}
//             />
//           </div>

//           <div className="flex flex-col gap-2">
//             <label className="text-base">Your Email: </label>
//             <input
//               className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
//               type="email"
//               maxLength="100"
//               required={true}
//               value={userInput.email}
//               onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
//               onBlur={() => {
//                 checkRequired();
//                 setError({ ...error, email: !isValidEmail(userInput.email) });
//               }}
//             />
//             {error.email &&
//               <p className="text-sm text-red-400">Please provide a valid email!</p>
//             }
//           </div>

//           <div className="flex flex-col gap-2">
//             <label className="text-base">Your Message: </label>
//             <textarea
//               className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
//               maxLength="500"
//               name="message"
//               required={true}
//               onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
//               onBlur={checkRequired}
//               rows="4"
//               value={userInput.message}
//             />
//           </div>

//           <div className="flex flex-col items-center gap-2">
//             {error.required &&
//               <p className="text-sm text-red-400">
//                 Email and Message are required!
//               </p>
//             }

//             <button
//               className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
//               role="button"
//               onClick={handleSendMail}
//             >
//               <span>Send Message</span>
//               <TbMailForward className="mt-1" size={18} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactWithoutCaptcha;


"use client";

import { isValidEmail } from "@/utils/check-email";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import {
  TbMailForward,
  TbUser,
  TbMail,
  TbMessage,
  TbCheck,
} from "react-icons/tb";
import { toast } from "react-toastify";

function ContactWithoutCaptcha() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (field, value) => {
    setUserInput((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: false,
    }));

    if (sent) {
      setSent(false);
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: !userInput.name.trim(),
      email:
        !userInput.email.trim() || !isValidEmail(userInput.email.trim()),
      message: !userInput.message.trim(),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some(Boolean);
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please complete all required fields.");
      return;
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      toast.error("Email service is not configured.");
      return;
    }

    setSending(true);

    try {
      const response = await emailjs.send(
        serviceID,
        templateID,
        {
          name: userInput.name,
          email: userInput.email,
          message: userInput.message,
        },
        {
          publicKey,
        }
      );

      if (response.status === 200) {
        setSent(true);

        toast.success("Message sent successfully!");

        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="w-full">
      {/* Heading */}
      <div className="mb-7">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#16f2b3]" />

          <span className="text-xs uppercase tracking-[0.35em] text-[#16f2b3] font-semibold">
            Let's Connect
          </span>

          <span className="h-px w-10 bg-gradient-to-r from-[#16f2b3] to-transparent" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Let&apos;s build something{" "}
          <span className="bg-gradient-to-r from-[#16f2b3] via-cyan-300 to-violet-500 bg-clip-text text-transparent">
            meaningful.
          </span>
        </h2>

        <p className="mt-3 max-w-xl text-sm md:text-base leading-7 text-gray-400">
          Have an opportunity, project, or idea in mind? Send me a message and
          I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSendMail}
        className="relative overflow-hidden rounded-[1.75rem] border border-[#29264a] bg-gradient-to-br from-[#11142a]/95 via-[#0d1123]/95 to-[#15112d]/95 p-5 md:p-7 shadow-2xl shadow-black/20"
      >
        {/* Decorative glow */}
        <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-[#16f2b3]/5 blur-3xl pointer-events-none" />

        <div className="relative space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-400"
            >
              <TbUser size={16} className="text-[#16f2b3]" />
              Your Name
            </label>

            <input
              id="contact-name"
              type="text"
              maxLength={100}
              autoComplete="name"
              value={userInput.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter your name"
              className={`w-full rounded-xl border ${
                errors.name
                  ? "border-red-500/70"
                  : "border-[#292d49] focus:border-[#16f2b3]/70"
              } bg-[#090d1d]/80 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:bg-[#0b1021] focus:ring-2 focus:ring-[#16f2b3]/10`}
            />

            {errors.name && (
              <p className="mt-2 text-xs text-red-400">
                Please enter your name.
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-400"
            >
              <TbMail size={16} className="text-[#16f2b3]" />
              Email Address
            </label>

            <input
              id="contact-email"
              type="email"
              maxLength={100}
              autoComplete="email"
              value={userInput.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="you@example.com"
              className={`w-full rounded-xl border ${
                errors.email
                  ? "border-red-500/70"
                  : "border-[#292d49] focus:border-[#16f2b3]/70"
              } bg-[#090d1d]/80 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:bg-[#0b1021] focus:ring-2 focus:ring-[#16f2b3]/10`}
            />

            {errors.email && (
              <p className="mt-2 text-xs text-red-400">
                Please provide a valid email address.
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-400"
            >
              <TbMessage size={16} className="text-[#16f2b3]" />
              Your Message
            </label>

            <textarea
              id="contact-message"
              maxLength={500}
              rows={5}
              value={userInput.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Tell me about your project, opportunity, or idea..."
              className={`w-full resize-none rounded-xl border ${
                errors.message
                  ? "border-red-500/70"
                  : "border-[#292d49] focus:border-[#16f2b3]/70"
              } bg-[#090d1d]/80 px-4 py-3 text-sm leading-6 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:bg-[#0b1021] focus:ring-2 focus:ring-[#16f2b3]/10`}
            />

            <div className="mt-2 flex justify-between">
              {errors.message ? (
                <p className="text-xs text-red-400">
                  Please enter your message.
                </p>
              ) : (
                <span />
              )}

              <span className="text-[10px] text-gray-600">
                {userInput.message.length}/500
              </span>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-1">
            <button
              type="submit"
              disabled={sending}
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#16f2b3] via-cyan-400 to-violet-600 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#071018] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(22,242,179,0.18)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />

              {sending ? (
                <>
                  <span className="relative h-4 w-4 animate-spin rounded-full border-2 border-[#071018]/30 border-t-[#071018]" />
                  <span className="relative">Sending...</span>
                </>
              ) : sent ? (
                <>
                  <TbCheck size={20} className="relative" />
                  <span className="relative">Message Sent</span>
                </>
              ) : (
                <>
                  <span className="relative">Send Message</span>
                  <TbMailForward
                    size={20}
                    className="relative transition-transform duration-300 group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactWithoutCaptcha;