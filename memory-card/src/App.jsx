import { useState, useEffect } from "react";
import "./App.css";
import { set } from "lodash";
import Cards from "./components/Cards";
import Difficulty from "./components/Difficulty";
import champs from "../champions";

function App() {
  const champions = champs();

  function getChampName(championValue) {
    //console.log("alt", champions[championValue].displayName);
    return champions[championValue].displayName;
  }

  function getChampImg(championValue) {
    const link = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champions[championValue].linkName}_0.jpg`;
    //console.log("img", link);
    return link;
  }

  function getCardsBasedOnMode(mode) {
    let cards = [];
    let addedCards = [];
    for (let i = 0; i < mode; ) {
      let newCard = Math.floor(Math.random() * champions.length);
      console.log("random index", newCard);
      if (!addedCards.includes(newCard)) {
        cards.push(champions[newCard]);
        console.log("added Cards", cards);
        addedCards.push(newCard);
        i++;
      }
    }
    setCardsForGame(cards);
    console.log("CARDS FOR GAME", cardsForGame);
  }

  //getCardsBasedOnMode(hardModeCardNum);
  //console.log("easy mode", getCardsBasedOnMode(easyModeCardNum));
  //console.log("medium mode", getCardsBasedOnMode(medModeCardNum));
  //console.log("hard mode", getCardsBasedOnMode(hardModeCardNum));

  const [cardsForGame, setCardsForGame] = useState([]);

  function handleCardsForGame(cards) {
    getCardsBasedOnMode(cards);
    console.log(cardsForGame);
  }

  function handleCardSelect() {}

  return (
    <>
      <div>
        <Difficulty onDifficultyChange={handleCardsForGame} />
      </div>

      <div>
        <Cards
          cards={cardsForGame}
          cardLink={getChampImg}
          champName={getChampName}
          onCardSelect={handleCardSelect}
        />
      </div>
    </>
  );
}

export default App;

/*
<div>
        <img src={`${getChampImg(21)}`} alt={`${getChampName(21)}`}></img>
        <div>{getChampName(21)}</div>
      </div>
*/
