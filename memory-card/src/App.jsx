import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Difficulty from "./components/Difficulty";
import champs from "../champions";
import HighScore from "./components/HighScore";
import Score from "./components/Score";
import GameOver from "./components/GameOver";
import { flip } from "lodash";

function App() {
  const champions = champs();

  const [shuffleInProgress, setShuffleInProgress] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [beginningCards, setBeginningCards] = useState([]);
  const [cardsForGame, setCardsForGame] = useState([]);
  const [clickedArray, setClickedArray] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  function getChampName(championValue) {
    //console.log("alt", champions[championValue].displayName);
    return champions[championValue].displayName;
  }

  function getChampImg(championValue) {
    const link = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champions[championValue].linkName}_0.jpg`;
    //console.log("img", link);
    return link;
  }

  function handleCardsForGame(cards) {
    getCardsBasedOnMode(cards);
    //console.log("CARDS FOR GAME handle card for game func", cardsForGame);
  }

  function getCardsBasedOnMode(mode) {
    //setScore(0);
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
    setBeginningCards(cards);
    //console.log("CARDS FOR GAME", cardsForGame);
  }

  function handleCardSelect() {
    setShuffleInProgress(true);
    let newCards = shuffle(cardsForGame);
    //console.log(newCards);
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

  function flipSwitch() {
    setShuffleInProgress(!shuffleInProgress);
  }

  function switchGameOverStatus() {
    setIsGameOver(!isGameOver);
    if (isGameOver) {
      setScore(0);
    }
  }

  useEffect(() => {
    //code
    if (shuffleInProgress) {
      console.log("changed");
    }

    //optional return
  }, [shuffleInProgress]); //dependency

  function updateScore() {
    if (!clicked) {
      setScore(score + 1);
      console.log("update score", score);
    }
  }

  function updateHighScore() {
    if (score >= highScore) {
      setHighScore(score + 1);
    }
  }

  function checkIfClicked(selected) {
    flipSwitch();
    if (clickedArray.includes(selected.value)) {
      console.log("ALREADY CLICKED");
      setClicked(true);
      setIsGameOver(true);
      console.log("score", score);
      console.log("high score", highScore);
      setCardsForGame([]);
    } else {
      setClickedArray((prevArray) => [...prevArray, selected.value]);
      updateScore();
      updateHighScore();
      setScore(score + 1);
      console.log("score", score);
      console.log("high score", highScore);
    }
  }

  return (
    <>
      <div className="scores">
        <Score score={score} isGameOver={isGameOver} />
        <HighScore highScore={highScore} isGameOver={isGameOver} />
      </div>
      <div>
        <Difficulty
          onDifficultyChange={handleCardsForGame}
          isGameOver={isGameOver}
        />
      </div>

      <div>
        <GameOver
          isGameOver={isGameOver}
          switchGameOverStatus={switchGameOverStatus}
          score={score}
        />
        <Cards
          cards={cardsForGame}
          cardLink={getChampImg}
          champName={getChampName}
          onCardSelect={handleCardSelect}
          shuffleInProgress={shuffleInProgress}
          toggleFlip={toggleFlip}
          flipSwitch={flipSwitch}
          checkIfClicked={checkIfClicked}
          updateScore={updateScore}
          isGameOver={isGameOver}
        />
      </div>
    </>
  );
}

export default App;
