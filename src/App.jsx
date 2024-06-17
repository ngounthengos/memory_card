import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

// define a set of images

const images = [
  "/img1.svg",
  "/img2.svg",
  "/img3.svg",
  "/img4.svg",
  "/img5.svg",
  "/img6.svg",
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

function App() {
  const [cards, setCards] = useState([]);
  const [filppedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    const generatedCards = generateCards();
    setCards(generatedCards);
  }, []);

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
        setMatchedPairs(matchedPairs + 1);
        setCards((prevCards) =>
          prevCards.map((card) =>
            newFillpedCards.some((flippedCard) => flippedCard.id === card.id)
              ? { ...card, matched: true }
              : card
          )
        );
      }
      setTimeout(() => {
        setFlippedCards([]);
        setIsChecking(false);
      }, 1000);
    }
  };

  return (
    <div className="bg-[url('/bg.svg')] bg-center">
      <div className="container m-auto h-screen flex justify-center items-center">
        <div className="game-bord grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
          {cards.map((card) => (
            <Card
              key={card.id}
              onClick={handleClick}
              card={card}
              isFillped={
                filppedCards.some(
                  (flippedCard) => flippedCard.id === card.id
                ) || card.matched
              }
            />
          ))}

          {matchedPairs === cards.length / 2 && (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-50">
              <h1 className="text-3xl font-bold">You Win</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
