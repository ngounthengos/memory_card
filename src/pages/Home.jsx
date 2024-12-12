import React from "react";
import { motion } from "framer-motion";
export default function Home({ section, handleSection }) {
  if (section === "home") {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[65vw] relative">
          <img src="/images/land.png" alt="" className="w-full" />
          <motion.img
            src="/images/logo.png"
            className="absolute w-[15%] -top-[7%] left-[37.5%]"
            // animate={{ rotate: [0, 2, 0], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <motion.img
            src="/images/play.png"
            onClick={() => handleSection("game")}
            className="absolute w-[11.5%] bottom-[32%] left-[7.5%]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        </div>
      </div>
    );
  }
  if (section === "home") {
    return (
      <div className="w-full h-screen flex justify-center items-center relative flex-col">
        <div
          className="w-[80%]"
          onClick={() => {
            handleSection("game");
          }}
        >
          <img src="/images/robot.png" />
        </div>
      </div>
    );
  }
}
