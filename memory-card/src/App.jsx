import { useState, useEffect } from "react";
import "./App.css";
import { set } from "lodash";
import Cards from "./components/Cards";
import Difficulty from "./components/Difficulty";

function App() {
  const champions = [
    {
      linkName: "Aatrox",
      displayName: "Aatrox",
      value: 1,
    },
    {
      linkName: "Ahri",
      displayName: "Ahri",
      value: 2,
    },
    {
      linkName: "Akali",
      displayName: "Akali",
      value: 3,
    },
    {
      linkName: "Akshan",
      displayName: "Akshan",
      value: 4,
    },
    {
      linkName: "Alistar",
      displayName: "Alistar",
      value: 5,
    },
    {
      linkName: "Amumu",
      displayName: "Amumu",
      value: 6,
    },
    {
      linkName: "Anivia",
      displayName: "Anivia",
      value: 7,
    },
    {
      linkName: "Annie",
      displayName: "Annie",
      value: 8,
    },
    {
      linkName: "Aphelios",
      displayName: "Aphelios",
      value: 9,
    },
    {
      linkName: "Ashe",
      displayName: "Ashe",
      value: 10,
    },
    {
      linkName: "AurelionSol",
      displayName: "Aurelion Sol",
      value: 11,
    },
    {
      linkName: "Azir",
      displayName: "Azir",
      value: 12,
    },
    {
      linkName: "Bard",
      displayName: "Bard",
      value: 13,
    },
    {
      linkName: "Belveth",
      displayName: "Bel'Veth",
      value: 14,
    },
    {
      linkName: "Blitzcrank",
      displayName: "Blitzcrank",
      value: 15,
    },
    {
      linkName: "Brand",
      displayName: "Brand",
      value: 16,
    },
    {
      linkName: "Braum",
      displayName: "Braum",
      value: 17,
    },
    {
      linkName: "Briar",
      displayName: "Briar",
      value: 18,
    },
    {
      linkName: "Caitlyn",
      displayName: "Caitlyn",
      value: 19,
    },
    {
      linkName: "Camille",
      displayName: "Camille",
      value: 20,
    },
    {
      linkName: "Cassiopeia",
      displayName: "Cassiopeia",
      value: 21,
    },
    {
      linkName: "Chogath",
      displayName: "Cho'Gath",
      value: 22,
    },
  ];

  const easyModeCardNum = 5;
  const medModeCardNum = 10;
  const hardModeCardNum = 15;

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
