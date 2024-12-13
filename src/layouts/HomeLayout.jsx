import React from "react";
import { motion } from "framer-motion";

export default function HomeLayout({ children }) {
  return (
    <div className="h-[100vh] w-[100vw] text-center bg-[#5bc33d] overflow-hidden relative">
      {children}
      <motion.img
        src="/images/cloud.webp"
        className="w-[20%] absolute top-[20%] right-0"
        initial={{ x: "100%" }}
        animate={{ x: "-100vw" }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      ></motion.img>
      <motion.img
        src="/images/cloud.webp"
        className="w-[14%] absolute top-[30%] right-0"
        initial={{ x: "80vw" }}
        animate={{ x: "-100vw" }}
        transition={{
          repeat: Infinity,
          duration: 200,
          ease: "linear",
        }}
      ></motion.img>

      <motion.img
        src="/images/cloud.webp"
        className="w-[8%] absolute top-[50%] right-0"
        initial={{ x: "160vw" }}
        animate={{ x: "-100vw" }}
        transition={{
          repeat: Infinity,
          duration: 400,
          ease: "linear",
        }}
      ></motion.img>
      <motion.img
        src="/images/cloud.webp"
        className="w-[8%] absolute top-[60%] right-0"
        initial={{ x: "40vw" }}
        animate={{ x: "-100vw" }}
        transition={{
          repeat: Infinity,
          duration: 160,
          ease: "linear",
        }}
      ></motion.img>
      <div className="absolute w-[120vw] z-0 -translate-x-[51%] left-1/2 -translate-y-1/2 top-1/2">
        <motion.img
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 360 }}
          src="/images/ray.webp"
          className="object-cover bg-blend-darken w-full"
        ></motion.img>
      </div>
    </div>
  );
}
