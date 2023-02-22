import React, { useState } from "react";
import cards from "../utils/card.js";

export default function Card() {
  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed(!pressed);
  };

  const [word, setWord] = useState(cards[0]);

  const arrayRandElement = (arr) => {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  };

  const nextWord = () => {
    let randomword = {};
    randomword = arrayRandElement(cards);
    console.log(randomword);
    setWord(word === randomword);
  };

  return (
    <>
      <div>
        <div className="card">
          <h2 className="card-title"> {word.word}</h2>

          <div className="card-transcription">
            Transcription: {word.transcription}
          </div>

          <div className="card-hint"> Hint: {word.hint}</div>

          <div onClick={handleChange}>
            {pressed ? (
              <div className="table_translate">{word.translate}</div>
            ) : (
              <button className="card-answer">I don`t know this word</button>
            )}
          </div>
        </div>
        <div>
          <button onClick={nextWord}>Next word</button>
        </div>
      </div>
    </>
  );
}
