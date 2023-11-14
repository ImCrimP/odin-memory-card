export default function HighScore({ highScore, isGameOver }) {
  //className={`${isGameOver ? "hide" : ""}`}
  return (
    <div className={`${isGameOver ? "displayScore" : ""}`}>
      <p>High Score: {highScore} </p>
    </div>
  );
}
