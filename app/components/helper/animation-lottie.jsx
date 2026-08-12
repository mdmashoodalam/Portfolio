"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData: animationPath,
      style: {
        width: width || '95%',
      },
    }),
    [animationPath, width]
  );

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;