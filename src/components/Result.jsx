import React, { useContext, useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

import { Howl } from "howler";
export default function Result({
  matchedPairs,
  cards,
  timeLeft,
  handleSection,
  handleStopSound,
}) {
  const [correct] = useState(
    new Howl({
      src: ["/audio/correct.mp3"],
      volume: 1,
    })
  );
  const [congrats] = useState(
    new Howl({
      src: ["/audio/yay.mp3"],
      volume: 1,
    })
  );
  const [lost] = useState(
    new Howl({
      src: ["/audio/lost.mp3"],
      volume: 1,
    })
  );
  useEffect(() => {
    if (matchedPairs === 4) {
      congrats.play();
      setTimeout(() => {
        handleSection("home");
      }, 7000);
    }
    if (matchedPairs >= 1 && matchedPairs < 4) {
      correct.play();
    }
  }, [matchedPairs]);
  if (timeLeft > 0 && matchedPairs === cards.length / 2) {
    return (
      <div className="absolute w-full h-full top-0 left-0 backdrop-blur-lg bg-black/50">
        <div className="w-full h-full flex items-center justify-center relative pb-[20vh]">
          {/* <DotLottieReact
      src="/lotties/win.lottie"
      autoplay
      className="w-[70%]"
    /> */}
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.25, ease: "easeIn", delay: 0.5 }}
            src="/images/prize_icon.webp"
            className="w-[30%] absolute pt-[10%]"
            style={{ pointerEvents: "none" }}
          ></motion.img>
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.25, ease: "easeIn", delay: 0.6 }}
            src="/images/prize_text.webp"
            className="w-[38%] absolute -translate-y-1/2 top-[58%]"
            style={{ pointerEvents: "none" }}
          ></motion.img>
        </div>
        <DotLottieReact
          src="/lotties/confetti.lottie"
          autoplay
          className="w-[150%] -translate-x-1/2 left-1/2 absolute top-0"
        />
      </div>
    );
  }
  if (timeLeft === 0) {
    handleStopSound();
    lost.play();
    setTimeout(() => {
      handleSection("home");
    }, 7000);
    return (
      <div className="absolute w-full h-full top-0 left-0 backdrop-blur-lg bg-black/50">
        <div className="w-full h-full flex items-center justify-center relative flex-col space-y-[1%] pb-[5vh]">
          <DotLottieReact
            src="/lotties/sad.lottie"
            autoplay
            loop
            className="w-[50%]"
          />
          <img
            src="/images/text_lose.webp"
            className="w-[30%]"
            style={{ pointerEvents: "none" }}
          />
        </div>
      </div>
    );
  }
}
