import React from "react";
import { useState, useEffect } from "react";
import { Howl } from "howler";

export default function Status({ score, timeLeft, peek, timePrep }) {
  return (
    <div className="w-[80%] mx-auto text-[3.6vw] pt-[5vh] flex justify-between items-center select-none font-sans">
      <div className="text-white">
        {peek ? (
          <p className="animate animate-pulse">Get Ready</p>
        ) : (
          <p>Score: {score}</p>
        )}
      </div>
      <div className="text-white">
        {peek ? (
          <p className="animate animate-pulse">
            Starting in {timePrep}
            <span className="text-[2.8vw] font-sans">s</span>
          </p>
        ) : (
          <p>
            Time Left {timeLeft}
            <span className="text-[2.8vw] font-sans">s</span>
          </p>
        )}
      </div>
    </div>
  );
}
