import { useState, useEffect } from "react";
import "../App.css";
import { update } from "lodash";

export default function Cards({
  cards,
  cardLink,
  champName,
  onCardSelect,
  shuffleInProgress,
  toggleFlip,
  flipSwitch,
  checkIfClicked,
  updateScore,
  isGameOver,
}) {
  //console.log("CARDS", cards);

  const [flipped, setFlipped] = useState(false);
  const [clickedArray, setClickedArray] = useState([]);

  useEffect(() => {
    if (shuffleInProgress) {
      // If shuffling is in progress, flip all cards
      toggleFlip(true);
      setFlipped(true);

      // After a short delay (1 second in this example), unflip the cards and trigger shuffle
      const timeoutId = setTimeout(() => {
        onCardSelect();
        toggleFlip(false);
        setFlipped(false);
        setClickedArray([]);
        //onCardSelect(); // Call the shuffle function in App.jsx
      }, 1000);

      return () => {
        clearTimeout(timeoutId); // Clear the timeout if the component unmounts or if shuffle is complete
      };
    }
  }, [shuffleInProgress, toggleFlip, onCardSelect]);

  const handleCardClick = (selected) => {
    if (clickedArray.includes(selected.value)) {
      console.log("ALREADY CLICKED");
    } else {
      setClickedArray((prevArray) => [...prevArray, selected.value]);
      updateScore();
    }
  };

  return (
    <div id="allImages">
      {cards.map((card, index) => (
        <div
          className={`${!isGameOver ? "cardWithName" : "hide"} ${
            flipped ? "flipped" : ""
          }`}
          key={index}
          onClick={() => checkIfClicked(card)} // Pass the index as an argument to the onClick handler
        >
          <div
            className={`card ${flipped ? "flipped" : ""}`}
            onClick={() => handleCardClick(card)}
          >
            <div className="cardFront">
              <img className="img" src={`${cardLink(card.value - 1)}`} alt="" />
              <p>{champName(card.value - 1)}</p>
            </div>
            <div className="cardBack">
              <img id="backCardImg" src="../lol-card-back.jpg" alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
