import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Howl } from "howler";

export default function Loading({ handleSection, section }) {
  const [sound] = useState(
    new Howl({
      src: ["/audio/5s.mp3"],
      volume: 1,
    })
  );
  useEffect(() => {
    sound.play();
    if (section === "loading") {
      setTimeout(() => {
        handleSection("game");
      }, 5500);
    }
  }, [section]);
  return (
    <div className="w-full h-screen flex justify-center items-center relative flex-col">
      <DotLottieReact
        src="/lotties/countdown.lottie"
        autoplay
        className="w-[60%]"
        startFrame={100} // Customize the start frame
      />
    </div>
  );
}
