import { useState, useEffect } from "react";
import "../App.css";

export default function Cards({
  cards,
  cardLink,
  champName,
  onCardSelect,
  shuffleInProgress,
  toggleFlip,
  flipSwitch,
}) {
  console.log("CARDS", cards);

  const [flipped, setFlipped] = useState(false);

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
        //onCardSelect(); // Call the shuffle function in App.jsx
      }, 1000);

      return () => {
        clearTimeout(timeoutId); // Clear the timeout if the component unmounts or if shuffle is complete
      };
    }
  }, [shuffleInProgress, toggleFlip]);

  return (
    <div id="allImages">
      {cards.map((card, index) => (
        <div
          className={`cardWithName ${flipped ? "flipped" : ""}`}
          key={index}
          onClick={() => flipSwitch()} // Pass the index as an argument to the onClick handler
        >
          <div className={`card ${flipped ? "flipped" : ""}`}>
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

/*
export default function Cards({ cards, cardLink, champName }) {
  console.log("CARDS", cards);
  return (
    cards.length > 0 && (
      <div id="imageContainer">
        {cards.map((card, index) => (
   
          <img key={index} src={`${cardLink(card.value - 1)}`} alt="" />
          <p key={`${index}Name`} >{champName(card.value - 1)}</p>
          
        ))}
      </div>
    )
  );
}
*/
