import React from "react";

export const Welcome = ({ startGame }) => {
  return (
    <>
      <p>Welcome to Whack A Mole!</p>
      <p>
        Whack a mole to earn points before time runs out! How many can you get?
      </p>
      <button id="play-btn" onClick={startGame}>
        Play!
      </button>
    </>
  );
};
