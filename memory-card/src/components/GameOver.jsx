import { useState, useEffect } from "react";
import "../App.css";

export default function GameOver({ isGameOver, switchGameOverStatus, score }) {
  return (
    <div className={` ${isGameOver ? "gameOverContainer" : ""}`}>
      <div className={` ${isGameOver ? "displayGameOver" : "hide"}`}>
        Game Over
        <h5>Score: {score}</h5>
      </div>
      <div className={` ${isGameOver ? "" : "hide"}`}>
        <button onClick={switchGameOverStatus}>Play Again</button>
        <button onClick={switchGameOverStatus}>Main Menu</button>
      </div>
    </div>
  );
}
