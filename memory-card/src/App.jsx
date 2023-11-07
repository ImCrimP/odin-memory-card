import { useState, useEffect } from "react";
import "./App.css";
import { set } from "lodash";
import Cards from "./components/Cards";
import Difficulty from "./components/Difficulty";
import champs from "../champions";
import HighScore from "./components/HighScore";
import Score from "./components/Score";

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

  function handleCardSelect() {
    let newCards = shuffle(cardsForGame);
    console.log(newCards);
    setCardsForGame([...newCards]);
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  return (
    <>
      <div className="scores">
        <Score />
        <HighScore />
      </div>
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
