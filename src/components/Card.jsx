import React, { useEffect, useState } from "react";
import { Howl } from "howler";
import { p } from "framer-motion/client";

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
      } border-[0.35vw] select-none aspect-square w-full rounded-[12%] border-[#006838] overflow-hidden`}
      onClick={() => onClick(card)}
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
            src="/images/card_back.png"
            alt="card"
            className="w-full h-full object-cover rounded-xl"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
