import { useState } from 'react'
import Card from './components/Card'

const flashcards = [
    {
      "question": "What type of minerals are iron/magnesium-bearing, such as augite, hornblende, olivine, or biotite?",
      "answer": "Ferromagnesian"
    },
    {
      "question": "What is a dark, dense, igneous rock with a fine texture, found in oceanic crust?",
      "answer": "Basalt"
    },
    {
      "question": "What is a mass of rock formed when a large body of magma cools inside the crust?",
      "answer": "Batholith"
    },
    {
      "question": "What is a rock that was older than and intruded by an igneous body?",
      "answer": "Country rock"
    },
    {
      "question": "What is a change directly from the solid to the gaseous state?",
      "answer": "Sublimation"
    },
    {
      "question": "What is the type of rock that forms when particles from other rocks or the remains of plants and animals are pressed and cemented together?",
      "answer": "Sediment"
    },
    {
      "question": "What is the cementation/consolidation of sediment into sedimentary rock?",
      "answer": "Lithification"
    },
    {
      "question": "What type of rock was previously igneous or sedimentary rock, but changed as a result of great temperature and pressure?",
      "answer": "Metamorphic rock"
    },
    {
      "question": "What is igneous rock that forms when magma hardens beneath Earth's surface?",
      "answer": "Intrusive rock"
    },
    {
      "question": "What type of rock is light-colored and contains high amounts of silica (65% or greater)?",
      "answer": "Felsic rock"
    },
    {
      "question": "What type of rock develops from a source that is chemically partway between felsic and mafic?",
      "answer": "Intermediate rock"
    },
    {
      "question": "What are dark-colored rocks that have low silica content and high iron and magnesium called?",
      "answer": "Mafic rock"
    },
    {
      "question": "What kind of rock texture refers to a fine-grain structure where crystals cannot be seen by the naked eye?",
      "answer": "Aphanitic"
    },
    {
      "question": "What kind of rock texture refers to a coarse-grain structure where crystals are larger than 2.5cm in diameter?",
      "answer": "Pegmatitic"
    },
    {
      "question": "What kind of rock texture refers to a structure where large crystals are embedded within a finer-grained matrix?",
      "answer": "Porphyritic"
    },
    {
      "question": "What are rocks that have less than 45% silica called?",
      "answer": "Ultramafic rock"
    },
];

function shuffleArray(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function App() {
  const [currentCardSet, setCardSet] = useState(flashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guessResult, setGuessResult] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [prevButtonStatus, setPrevButtonStatus] = useState("disabled");
  const [nextButtonStatus, setNextButtonStatus] = useState("");

  const currentCard = currentCardSet[currentIndex];

  const handleNext = () => {
    if (currentIndex < currentCardSet.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setPrevButtonStatus("");
    }

    if (currentIndex === currentCardSet.length - 2) {
      setNextButtonStatus("disabled");
    }

    setGuessResult("");
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setNextButtonStatus("");
    }

    if (currentIndex === 1) {
      setPrevButtonStatus("disabled");
    }

    setGuessResult("");
  };

  const handleShuffle = () => {
    setCardSet(shuffleArray(flashcards));
    setCurrentIndex(0);
    setGuessResult("");
    setCurrentInput("");
    setPrevButtonStatus("disabled");
    setNextButtonStatus("");
  };

  const handleChange = (e) => {
    setCurrentInput((currentInput) => (e.target.value));
  };

  const handleGuess = () => {
    if (currentInput === currentCardSet[currentIndex].answer) {
      setGuessResult("correct");
    }
    else {
      setGuessResult("incorrect");
    }

    setCurrentInput("");
  };

  return (
    <div className="App">
      <h2>Basic Geology Study Guide</h2>
      <h3>Test your Geology 101 knowledge with some common term definitions!</h3>
      <p>{`Card ${currentIndex + 1} of ${currentCardSet.length}`}</p>
      <Card key={currentIndex} question={currentCard.question} answer={currentCard.answer} result={guessResult} />
      <div className="guess">
        <input className="guess-input" type="text" name="guess-input" placeholder="Guess the answer..." onChange={handleChange} value={currentInput}/>
        <button className="guess-button" onClick={handleGuess}>Guess</button>
      </div>
      <div className="traverse-cards">
        <button className={`button ${prevButtonStatus}`} onClick={handlePrev}>Previous</button>
        <button className={`button ${nextButtonStatus}`} onClick={handleNext}>Next</button>
        <button className="button" onClick={handleShuffle}>Shuffle</button>
      </div>
    </div>
  );
}

export default App;