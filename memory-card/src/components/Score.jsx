export default function Score({ score, isGameOver }) {
  //className={`${isGameOver ? "hide" : ""}`}
  return (
    <div className={`${isGameOver ? "displayScore" : ""}`}>
      <p>Score: {score}</p>
    </div>
  );
}
