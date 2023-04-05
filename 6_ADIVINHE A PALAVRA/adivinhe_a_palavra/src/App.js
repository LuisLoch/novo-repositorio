// CSS
import './App.css';

// Components
import StartScreen from './components/StartScreen';

// Data
import { wordsList } from './data/words';

// React
import { useCallback, useEffect, useState } from 'react';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

const guessesQty = 3

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  const defineWordAndCategory = useCallback(() => {
    //define random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    //define random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    
    return { word, category }
  }, [words])

  // Starts the game
  const startGame = useCallback(() => {
    //clear all letters
    clearLetterStates()

    //set the word and category
    const { word, category } = defineWordAndCategory()

    //create the array of letters
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    //fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    //setLetters(letters)

    setGameStage(stages[1].name)
  }, [defineWordAndCategory])

  // Proccess the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()

    //check if the letter has already been utilized
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter))
      return
    
    //push guessed letter or remove a guess
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ])
    }else{
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ])
      setGuesses((actualGuesses) => actualGuesses-1)
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  //check is the guesses ended
  useEffect(() => {
    if(guesses <= 0){
      clearLetterStates()
      setGameStage(stages[2].name)
    }

  }, [guesses])

  //check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]

    if(guessedLetters.length === uniqueLetters.length){
      //add to the score number
      setScore((actualScore) => actualScore += 100)
      //restart the word
      startGame()
    }
  }, [guessedLetters, letters, startGame])


  //Resets the game
  const retryGame = () => {
    setScore(0)
    setGuesses(guessesQty)
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retryGame={retryGame} score={score} />}
    </div>
  );
}

export default App;