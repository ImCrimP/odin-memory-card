import { useState, useEffect } from "react";
import "../App.css";

export default function GameOver({
  isGameOver,
  isGameWon,
  switchGameOverStatus,
  score,
  playAgain,
}) {
  return (
    <div className={` ${isGameOver || isGameWon ? "gameOverContainer" : ""}`}>
      <div className={` ${isGameOver ? "displayGameOver" : "hide"}`}>
        Game Over
        <h5>Score: {score - 1}</h5>
      </div>
      <div className={` ${isGameWon ? "displayGameOver" : "hide"}`}>
        You Won
        <h5>Score: {score}</h5>
      </div>
      <div className={` ${isGameOver || isGameWon ? "" : "hide"}`}>
        <button onClick={playAgain}>Play Again</button>
        <button onClick={switchGameOverStatus}>Main Menu</button>
      </div>
    </div>
  );
}
