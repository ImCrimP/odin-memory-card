import { useState, useEffect } from "react";

export default function Cards({ cards, cardLink }) {
  console.log("CARDS", cards);
  return (
    cards.length > 0 && (
      <div>
        {cards.map((card, index) => (
          <img key={index} src={`${cardLink(card.value - 1)}`} alt="" />
        ))}
      </div>
    )
  );
}
