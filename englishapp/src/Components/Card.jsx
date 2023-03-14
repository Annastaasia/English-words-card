import React, { useState } from "react";
import cards from "../utils/card.js";

function Card() {
  const [pressed, setPressed] = useState(false);
  const [index, setIndex] = useState(0);
  const [counter, setCounter] = useState(1);
  const onecard = cards[index];

  const handleChange = () => {
    setPressed(!pressed);
  };

  const nextClick = () => {
    if (index + 1 >= cards.length) {
      setIndex(0);
    } else setIndex(index + 1);
    handleCount();
  };

  const prevClick = () => {
    if (index - 1 < 0) {
      setIndex(cards.length - 1);
    } else setIndex(index - 1);
  };

  const handleCount = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <main>
        <div className="container__onecard">
          <button className="card-answer" onClick={prevClick}>
            Prev word
          </button>
          <div className="card" {...index}>
            <h2 className="card-title"> {onecard.word}</h2>

            <div className="card-transcription">
              Transcription: {onecard.transcription}
            </div>

            <div className="card-hint"> Hint: {onecard.hint}</div>

            <div onClick={handleChange}>
              {pressed ? (
                <div className="table_translate">{onecard.translate}</div>
              ) : (
                <button className="card-answer">I don`t know this word</button>
              )}
            </div>
          </div>
          <button className="card-answer" onClick={nextClick}>
            Next word
          </button>
        </div>
        <div className="card-counter">{counter + "/" + cards.length}</div>
      </main>
    </>
  );
}

export default Card;

///////////////// Math random ///////////////
//const [word, setWord] = useState(cards[0]);

// useEffect(() => {
//   wordGenerate();
// }, []);

// const wordGenerate = () => {
//   let randomNumber = Math.floor(Math.random() * cards.length);
//   setWord(cards[randomNumber]);
// };

// const nextWord = () => {
//   wordGenerate();
// };
