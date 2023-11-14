export default function HighScore({ highScore, isGameOver, isGameWon }) {
  //className={`${isGameOver ? "hide" : ""}`}
  return (
    <div className={`${isGameOver || isGameWon ? "displayScore" : ""}`}>
      <p>High Score: {highScore} </p>
    </div>
  );
}
