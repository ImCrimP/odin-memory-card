export default function Score({ score, isGameOver, isGameWon }) {
  //className={`${isGameOver ? "hide" : ""}`}
  return (
    <div className={`${isGameOver || isGameWon ? "displayScore" : ""}`}>
      <p>Score: {score}</p>
    </div>
  );
}
