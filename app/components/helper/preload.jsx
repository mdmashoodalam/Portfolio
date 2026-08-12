"use client";

import { useEffect, useState } from "react";

export default function PreloadScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Prevent the preload animation from showing repeatedly
    // during the same browser session.
    const hasLoaded = sessionStorage.getItem("portfolio-preloaded");

    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 900);

    const removeTimer = setTimeout(() => {
      sessionStorage.setItem("portfolio-preloaded", "true");
      setIsLoading(false);
    }, 1350);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <>
      <style jsx global>{`
        @keyframes preloadName {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
            filter: blur(5px);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes preloadRole {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes preloadFadeOut {
          0% {
            opacity: 1;
            transform: scale(1);
          }

          100% {
            opacity: 0;
            transform: scale(1.02);
            visibility: hidden;
          }
        }

        .preload-name {
          animation: preloadName 0.65s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .preload-role {
          opacity: 0;
          animation: preloadRole 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.2s
            forwards;
        }

        .preload-exit {
          animation: preloadFadeOut 0.45s cubic-bezier(0.4, 0, 0.2, 1)
            forwards;
        }
      `}</style>

      <div
        className={`
          fixed inset-0
          z-[9999]
          flex
          items-center
          justify-center
          bg-[#f4f4f4]
          border-t-[4px]
          border-[#1a1a1a]
          ${isExiting ? "preload-exit" : ""}
        `}
      >
        <div className="flex flex-col items-center justify-center px-6 text-center">

          {/* Name */}
          <h1
            className="
              preload-name
              text-[#292929]
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              leading-[0.82]
              tracking-tight
            "
            style={{
              fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
            }}
          >
            Md Mashood
            <br />
            Alam
          </h1>

          {/* Role */}
          <p
            className="
              preload-role
              mt-5
              text-[#555568]
              text-sm
              sm:text-base
              md:text-lg
              tracking-[0.18em]
              uppercase
            "
            style={{
              fontFamily: "Arial, sans-serif",
            }}
          >
            Software Engineer
          </p>

        </div>
      </div>
    </>
  );
}