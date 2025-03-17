// import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>React Memory Game</h1>
        <div>
          <p>current score: {'score'}</p>
          <p>best score: {'bestScore'}</p>
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </>
  )
}

export default App
