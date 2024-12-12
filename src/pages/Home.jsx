import React from "react";
import HomeLayout from "../layouts/HomeLayout";
import { motion } from "framer-motion";
export default function Home({ section, handleSection }) {
  // if (section === "home") {
  //   return (
  //     <div className="w-full h-screen flex items-center justify-center">
  //       <div className="w-[65vw] relative">
  //         <img
  //           src="/images/land.webp"
  //           alt=""
  //           className="w-full"
  //           style={{ pointerEvents: "none" }}
  //         />
  //         <motion.img
  //           src="/images/logo.webp"
  //           className="absolute w-[15%] -top-[7%] left-[37.5%]"
  //           // animate={{ rotate: [0, 2, 0], scale: [1, 1.05, 1] }}
  //           style={{ pointerEvents: "none" }}
  //           transition={{ repeat: Infinity, duration: 2 }}
  //         />
  //         <motion.button
  //           onClick={() => {
  //             handleSection("game"), handlePlaySound();
  //           }}
  //           className="absolute w-[11.5%] bottom-[32%] left-[7.5%] z-50"
  //           animate={{ scale: [1, 1.05, 1] }}
  //           transition={{ repeat: Infinity, duration: 1 }}
  //         >
  //           <img
  //             src="/images/play.webp"
  //             style={{ pointerEvents: "none" }}
  //             alt="play game"
  //             className="w-full"
  //           />
  //         </motion.button>
  //       </div>
  //     </div>
  //   );
  // }
  if (section === "home") {
    return (
      <HomeLayout>
        <div className="w-full h-screen flex justify-center items-center relative flex-col z-10 pb-[5%]">
          <div className="w-[50%] relative">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.15, delay: 0.4, ease: "easeIn" }}
              src="/images/welcome.png"
              style={{ pointerEvents: "none" }}
            ></motion.img>
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.15, delay: 0.4, ease: "easeIn" }}
              src="/images/right.png"
              style={{ pointerEvents: "none" }}
              className="absolute -right-[10%] top-[15%] w-[10%]"
            ></motion.img>
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.15, delay: 0.5, ease: "easeIn" }}
              src="/images/left.png"
              style={{ pointerEvents: "none" }}
              className="absolute -left-[12.5%] -bottom-[7.5%] w-[10%]"
            ></motion.img>
          </div>
          <div
            className="w-[52%] translate-x-[5%]"
            onClick={() => {
              handleSection("loading");
            }}
          >
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.15, delay: 0.3, ease: "easeIn" }}
              src="/images/robot-banner.png"
              style={{ pointerEvents: "none" }}
            ></motion.img>
          </div>
        </div>
      </HomeLayout>
    );
  }
}
