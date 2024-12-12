import { useEffect, useState } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { GameProvider } from "./context/GameProvider";
import { Howl } from "howler";
import Game from "./pages/Game";
import Home from "./pages/Home";

// define a set of images

function App() {
  const [sound, setSound] = useState(null);
  const [section, setSection] = useState("home");
  const handleSection = (newSection) => {
    setSection(newSection);
  };

  useEffect(() => {
    if (section === "game") {
      const newSound = new Howl({
        src: ["/audio/win.mp3"],
        // autoplay: true,
        loop: true,
        volume: 0.15,
      });
      setSound(newSound);

      if (!newSound.playing()) {
        newSound.play();
      }

      return () => {
        newSound.stop();
      };
    } else {
      const newSound = new Howl({
        src: ["/audio/happy.mp3"],
        // autoplay: true,
        loop: true,
        volume: 0.15,
      });
      setSound(newSound);

      if (!newSound.playing()) {
        newSound.play();
      }

      return () => {
        newSound.stop();
      };
    }
  }, [section]);

  return (
    <GameProvider>
      <MainLayout>
        {section === "home" && (
          <Home section={section} handleSection={handleSection} />
        )}

        {section === "game" && (
          <Game section={section} handleSection={handleSection} />
        )}
      </MainLayout>
    </GameProvider>
  );
}
export default App;
