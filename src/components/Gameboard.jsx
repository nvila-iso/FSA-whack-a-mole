import React from "react";

export const Gameboard = ({ molePosition, moleWhack }) => {
  return (
    <>
      <div className="gameboard">
        {Array.from({ length: 9 }).map((_, i) => (
          <p className={i === molePosition ? "mole" : "hole"} onClick={i === molePosition}></p>
        ))}
      </div>
    </>
  );
};
