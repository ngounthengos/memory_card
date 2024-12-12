import React, { useEffect, useState } from "react";
import { Howl } from "howler";
import { motion } from "framer-motion";

const Card = ({ card, onClick, isFillped, peek }) => {
  const [sound] = useState(
    new Howl({
      src: ["/audio/open.mp3"],
      volume: 1,
    })
  );
  useEffect(() => {
    if (isFillped) {
      if (!peek) {
        sound.play();
      }
    }
  }, [isFillped]);
  return (
    <div
      className={`card ${
        isFillped ? "" : ""
      } border-[0.5vw] select-none aspect-[4.8/5] w-full shadow-sm rounded-[12%] border-[#BB9242] overflow-hidden`}
      onClick={() => {
        if (!peek) {
          onClick(card);
        }
      }}
    >
      <div
        className={`inner-card w-full h-full flex items-center justify-center bg-white ${
          card.matched ? "matched" : ""
        }`}
      >
        {isFillped || card.matched ? (
          <img
            src={card.image}
            alt="card"
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <img
            src="/images/card_back.webp"
            alt="card"
            className="w-full h-full object-cover rounded-xl"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
