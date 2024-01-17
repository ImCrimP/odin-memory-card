export default function Score({ score, isGameOver, isGameWon }) {
  //className={`${isGameOver ? "hide" : ""}`}
  return (
    <div className={`${isGameOver || isGameWon ? "displayScore" : ""}`}>
      <p>Score: {isGameOver ? score - 1 : score}</p>
    </div>
  );
}
