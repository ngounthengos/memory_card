import React, { useContext, useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { Howl } from "howler";
export default function Result({
  matchedPairs,
  cards,
  timeLeft,
  handleSection,
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
        <div className="w-full h-full flex items-center justify-center">
          <DotLottieReact
            src="/lotties/win.lottie"
            autoplay
            className="w-[70%]"
          />
        </div>
        <DotLottieReact
          src="/lotties/confetti.lottie"
          autoplay
          className="w-full h-full absolute top-0 left-0"
        />
      </div>
    );
  }
  if (timeLeft === 0) {
    setTimeout(() => {
      handleSection("home");
    }, 7000);
    return (
      <div className="absolute w-full h-full top-0 left-0 backdrop-blur-lg bg-black/50">
        <div className="w-full h-full flex items-center justify-center">
          <DotLottieReact
            src="/lotties/sad.lottie"
            autoplay
            className="w-[50%]"
          />
        </div>
      </div>
    );
  }
}
