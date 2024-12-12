import React, { createContext, useState, useRef, useEffect } from "react";

// Create a context
export const GameContext = createContext();

// Create a provider component
export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    score: 0,
    level: 1,
    strike: 0,
    // Add other game state properties here
  });

  const [section, setSection] = useState("home");
  const updateScore = (newScore) => {
    setGameState((prevState) => ({
      ...prevState,
      score: newScore,
    }));
  };

  const updateLevel = (newLevel) => {
    setGameState((prevState) => ({
      ...prevState,
      level: newLevel,
    }));
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        updateScore,
        updateLevel,
        section,
        setSection,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
