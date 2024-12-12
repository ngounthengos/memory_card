import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Howl } from "howler";
import { use } from "react";
import { GameContext } from "../context/GameProvider";

export default function Status({ timeLeft, peek }) {
  const [sound] = useState(
    new Howl({
      src: ["/audio/10s.m4a"],
      volume: 1,
    })
  );
  //   const { gameState } = useContext(GameContext);
  useEffect(() => {
    if (timeLeft === 10) {
      sound.play();
    }
  }, [timeLeft]);
  return (
    <div className="w-[80%] mx-auto text-[4vw] pt-[5vh] flex justify-between items-center select-none">
      {/* <div className="text-white">Score: {JSON.stringify(gameState)}</div> */}
      <div className="text-white">Time left: {peek ? "60" : timeLeft}</div>
    </div>
  );
}
