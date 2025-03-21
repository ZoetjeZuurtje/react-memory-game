import { useState } from 'react'
import './App.css'
import Card from './Card'

function createRandomImageArray(length) {
  function createImageObject() {
    const getRandomImageSeed = () => crypto.randomUUID().split('-')[0];
    return {key: crypto.randomUUID(), seed: getRandomImageSeed()};
  }

  const newArray = new Array(length).fill(null);
  return newArray.map(createImageObject);
}

function App() {
  const [images, setImages] = useState(createRandomImageArray(12));
  const [clickedKeys, setClickedKeys] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function shuffleImages() {
    const shuffledImages = [...images];
    shuffledImages.sort(() => Math.random() - 0.5);
    setImages(shuffledImages);
  }

  function clickImage(key) {
    return function () {
      if (clickedKeys.includes(key)) {
        setClickedKeys([]);
        setScore(0);
      } else {
        if (score + 1 > bestScore) {
          setBestScore(score + 1);
        }
        setScore(score + 1);
        setClickedKeys([...clickedKeys, key]);
      }
      shuffleImages();
    }
  }

  return (
    <>
      <header>
        <h1>React Memory Game</h1>
        <div>
          <p>current score: {score}</p>
          <p>best score: {bestScore}</p>
        </div>
      </header>
      <main>
        <h2>How to Play</h2>
        <ol>
          <li>Click on a card to select it</li>
          <li>If you have selected a card before, you lose. Otherwise, you get a point</li>
          <li>After each click, the cards are shuffled</li>
        </ol>
        <div className="cards-wrapper">
          {
            images.map(image => <Card clickHandler={clickImage(image.key)} key={image.key} imageSeed={image.seed} />)
          }
        </div>
      </main>
    </>
  );
}

export default App
