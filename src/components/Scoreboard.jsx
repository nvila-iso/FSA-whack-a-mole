import React from "react";

export const Scoreboard = ({ score, restart }) => {
  return (
    <>
      <p>Score: {score}</p>
      <button onClick={restart}>Restart</button>
    </>
  );
};
