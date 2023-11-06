import { useState, useEffect } from "react";
import "../App.css";

export default function Cards({ cards, cardLink, champName }) {
  console.log("CARDS", cards);
  return (
    cards.length > 0 && (
      <div id="imageContainer">
        {cards.map((card, index) => (
          <div key={index}>
            <img src={`${cardLink(card.value - 1)}`} alt="" />
            <p>{champName(card.value - 1)}</p>
          </div>
        ))}
      </div>
    )
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
