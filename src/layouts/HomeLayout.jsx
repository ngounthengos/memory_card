import React from "react";
import { motion } from "framer-motion";

export default function HomeLayout({ children }) {
  return (
    <div className="h-[100vh] w-[100vw] text-center bg-[#5bc33d] overflow-hidden relative">
      {children}
      <div className="absolute w-[50%] z-10">
        <img src="/images/robot.png" className="w-full"></img>
      </div>
      <div className="absolute w-[120vw] z-0 -translate-x-[51%] left-1/2 -translate-y-1/2 top-1/2">
        <motion.img
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 360 }}
          src="/images/ray.png"
          className="object-cover bg-blend-darken w-full"
        ></motion.img>
      </div>
    </div>
  );
}
