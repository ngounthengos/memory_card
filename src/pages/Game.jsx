import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Status from "../components/Status";
import Result from "../components/Result";
import Controller from "../components/Controller";
import { GameContext } from "../context/GameProvider";
import { Howl } from "howler";
import MainLayout from "../layouts/MainLayout";

const images = [
  "/images/card_brain.webp",
  "/images/card_kid.webp",
  "/images/card_dugro.webp",
  "/images/card_logo.webp",
];

const generateCards = () => {
  const doubleImages = images.concat(images);
  const shuffledImages = doubleImages.sort(() => Math.random() - 0.5);
  return shuffledImages.map((image, index) => ({
    id: index,
    image,
    matched: false,
  }));
};

export default function Game({ section, handleSection, handleStopSound }) {
  const [cards, setCards] = useState([]);
  const [filppedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [timePrep, setTimePrep] = useState(10); // Countdown timer state 3
  const [peek, setPeek] = useState(true);
  const [state, setState] = useState("win");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(40);

  const [sound] = useState(
    new Howl({
      src: ["/audio/open.mp3"],
      volume: 1,
    })
  );
  useEffect(() => {
    if (timePrep <= 1) {
      sound.play();
    }
  }, [timePrep]);

  const [wrong] = useState(
    new Howl({
      src: ["/audio/wrong.mp3"],
      volume: 0.5,
    })
  );

  const reset = () => {
    setCards([]);
    setFlippedCards([]);
    setMatchedPairs(0);
    setIsChecking(false);
    setTimeLeft(10);
    setPeek(true);
  };

  const handleClick = (clickedCard) => {
    if (
      isChecking ||
      filppedCards.some((card) => card.id === clickedCard.id) ||
      clickedCard.matched
    ) {
      return;
    }

    const newFillpedCards = [...filppedCards, clickedCard];
    setFlippedCards(newFillpedCards);

    if (newFillpedCards.length === 2) {
      setIsChecking(true);
      if (newFillpedCards[0].image === newFillpedCards[1].image) {
        setScore((prevScore) => prevScore + 1);
        setMatchedPairs(matchedPairs + 1);
        setCards((prevCards) =>
          prevCards.map((card) =>
            newFillpedCards.some((flippedCard) => flippedCard.id === card.id)
              ? { ...card, matched: true }
              : card
          )
        );
      }
      if (newFillpedCards[0].image !== newFillpedCards[1].image) {
        wrong.play();
      }
      setTimeout(() => {
        setFlippedCards([]);
        setIsChecking(false);
      }, 1000);
    }
  };
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      // Handle the end of the countdown (e.g., end the game)
      console.log("Time's up!");
    }
  }, [timeLeft]);
  useEffect(() => {
    if (timePrep === 0) {
      setPeek(false);
    }
    if (timePrep > 0) {
      const timer = setInterval(() => {
        setTimePrep((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      // Handle the end of the countdown (e.g., end the game)
      setState("lost");
      console.log("Time's up!");
    }
  }, [timePrep]);

  useEffect(() => {
    const generatedCards = generateCards();
    setCards(generatedCards);
  }, []);
  useEffect(() => {
    if (score === 4) {
      setState("win");
      countdown.stop();
      setTimeLeft(100000000000);
    }
  }, [score]);
  const [countdown] = useState(
    new Howl({
      src: ["/audio/ending.mp3"],
      volume: 1,
    })
  );
  //   const { gameState } = useContext(GameContext);
  useEffect(() => {
    if (timeLeft === 10) {
      countdown.play();
    }
  }, [timeLeft]);
  if (section === "game")
    return (
      <MainLayout>
        <div className="w-full h-screen flex justify-center items-center relative flex-col">
          <Status
            timeLeft={timeLeft}
            peek={peek}
            timePrep={timePrep}
            score={score}
            handleStopSound={handleStopSound}
          />
          <div className="grow flex items-center justify-center w-[80%] mx-auto pb-[5vh]">
            <div className="grid grid-cols-4 gap-8 w-full">
              {cards.map((card) => (
                <Card
                  key={card.id}
                  peek={peek}
                  onClick={handleClick}
                  card={card}
                  isFillped={
                    filppedCards.some(
                      (flippedCard) => flippedCard.id === card.id
                    ) ||
                    card.matched ||
                    peek
                  }
                />
              ))}
              <Result
                matchedPairs={matchedPairs}
                cards={cards}
                timeLeft={timeLeft}
                handleSection={handleSection}
                reset={reset}
                handleStopSound={handleStopSound}
              />
            </div>
          </div>
          {/* <Controller handleSection={handleClick} /> */}
        </div>
      </MainLayout>
    );
}
