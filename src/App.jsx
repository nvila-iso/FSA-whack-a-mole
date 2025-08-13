import { useState } from "react";
import { Welcome } from "./components/Welcome";
import { Gameboard } from "./components/Gameboard";
import { Scoreboard } from "./components/Scoreboard";

export default function App() {
  const [screen, setScreen] = useState("welcome");

  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(20);
  const [mole, setMole] = useState(Math.floor(Math.random() * 9));
  // console.log(mole);

  const startGame = () => {
    setScreen("game");
    setScore(0);
    setMole(Math.floor(Math.random() * 9));
  };

  const restart = () => {
    return setScreen("welcome");
  };

  const moleWhack = () => {
    setScore += 1;
    setMole(Math.floor(Math.random() * 9));
  };

  const loadPage = () => {
    if (screen === "welcome") {
      return <Welcome startGame={startGame} />;
    } else if (screen === "game") {
      return (
        <>
          <Scoreboard score={score} timer={timer} restart={restart} />
          <Gameboard mole={mole} moleWhack={moleWhack} />
        </>
      );
    }
  };

  return (
    <>
      <main>
        <h1>Whack A Mole</h1>
        {loadPage()}
      </main>
    </>
  );
}
