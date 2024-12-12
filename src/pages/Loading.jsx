import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Howl } from "howler";

export default function Loading({ handleSection, section }) {
  const [countdown, setCountdown] = useState(3);
  const [sound] = useState(
    new Howl({
      src: ["/audio/3s.mp3"],
      volume: 1,
    })
  );
  useEffect(() => {
    sound.play();
  }, [section]);
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        // sound.play();
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
    if (section === "loading" && countdown === 0) {
      setTimeout(() => {
        handleSection("game");
      }, 500);
    }
  }, [countdown]);
  return (
    <div className="w-full h-screen flex justify-center items-center relative flex-col">
      <DotLottieReact
        src="/lotties/pulse.lottie"
        autoplay
        loop
        className="w-[60%]"
        startFrame={100} // Customize the start frame
      />
      <div className="w-full h-full absolute">
        <div className="text-center w-full h-full flex items-center justify-center text-[10vw]">
          {countdown}
        </div>
      </div>
    </div>
  );
}
