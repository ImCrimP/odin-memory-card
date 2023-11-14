import { useState, useEffect } from "react";
import "../App.css";

export default function Difficulty({
  onDifficultyChange,
  isGameOver,
  isGameWon,
}) {
  const easy = 5;
  const medium = 10;
  const hard = 15;

  function toggleMode(e) {
    let difficulty = e.target.value;
    console.log(difficulty);
    onDifficultyChange(difficulty);
  }

  return (
    <div
      id="btns"
      className={`${isGameOver ? "hide" : ""} ${isGameWon ? "hide" : ""}`}
    >
      <button id="easy" value={5} onClick={toggleMode}>
        Easy
      </button>
      <button id="medium" value={10} onClick={toggleMode}>
        Medium
      </button>
      <button id="hard" value={15} onClick={toggleMode}>
        Hard
      </button>
    </div>
  );
}
