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

  const [shuffleInProgress, setShuffleInProgress] = useState(false);

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
      //console.log("random index", newCard);
      if (!addedCards.includes(newCard)) {
        cards.push(champions[newCard]);
        //console.log("added Cards", cards);
        addedCards.push(newCard);
        i++;
      }
    }
    setCardsForGame(cards);
    //console.log("CARDS FOR GAME", cardsForGame);
  }

  const [cardsForGame, setCardsForGame] = useState([]);

  function handleCardsForGame(cards) {
    getCardsBasedOnMode(cards);
    console.log(cardsForGame);
  }

  function handleCardSelect() {
    setShuffleInProgress(true);
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

  function toggleFlip(flipState) {
    setShuffleInProgress(flipState);
  }

  useEffect(() => {
    //code
    if (shuffleInProgress) {
      console.log("changed");
    }

    //optional return
  }, [shuffleInProgress]); //dependency

  /*
  useEffect(() => {
    // Load your initial card data here (e.g., from an API)
    // Replace the following with actual data fetching code
    // Simulating loading data with a setTimeout
    setTimeout(() => {
      const initialCards = []; // Replace with actual data
      setCardsForGame(initialCards);
    }, 1000); // Adjust the delay as needed
  }, []);
  */

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
          shuffleInProgress={shuffleInProgress}
          toggleFlip={toggleFlip}
        />
      </div>
    </>
  );
}

export default App;
