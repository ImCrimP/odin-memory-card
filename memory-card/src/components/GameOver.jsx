import { useState, useEffect } from "react";
import "../App.css";

export default function GameOver({ isGameOver }) {
  return (
    <div className={` ${isGameOver ? "gameOverContainer" : ""}`}>
      <div className={`displayGameOver ${isGameOver ? "gameOver" : ""}`}>
        Game Over
      </div>
    </div>
  );
}
