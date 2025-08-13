import { useState } from "react";
import { Welcome } from "./components/Welcome";
import { Gameboard } from "./components/Gameboard";
import { Scoreboard } from "./components/Scoreboard";


export default function App() {
  const [screen, setScreen] = useState("welcome");

  const [score, setScore] = useState(0);
  const [mole, setMole] = useState(Math.floor(Math.random() * 10));
  // console.log(mole);

  const loadPage = () => {
    if (screen === "welcome") {
      return <Welcome />;
    } else if (screen === "game") {
      <>
        <Gameboard />
        <Scoreboard />
      </>;
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
