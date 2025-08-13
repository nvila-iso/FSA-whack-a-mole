import React from "react";

export const Scoreboard = ({ score, timer, restart }) => {
  return (
    <div className="player-panel">
      <p>Score: {score}</p>
      <p>Time: {timer}</p>
      <p id="restart-btn" onClick={restart}>
        Restart
      </p>
    </div>
  );
};
