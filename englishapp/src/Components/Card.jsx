import React, { useEffect, useState } from "react";
import Array from "../utils/card.js";

export default function Card() {
  const [pressed, setPressed] = useState(false);
  const [word, setWord] = useState(Array[0]);
  const [index, setIndex] = useState(0);
  let onecard = Array[index];

  useEffect(() => {
    wordGenerate();
  }, []);

  const handleChange = () => {
    setPressed(!pressed);
  };

  const wordGenerate = () => {
    const randomNumber = Math.floor(Math.random() * Array.length);
    setWord(Array[randomNumber]);
  };

  const handleClick = (direction) => {
    let newIndex = index;

    direction === "next" ? ++newIndex : --newIndex;

    if (newIndex >= Array.length) {
      newIndex = 0;
    }

    if (newIndex < 0) {
      newIndex = Array.length - 1;
    }
    setIndex(newIndex);
  };

  const nextWord = () => {
    wordGenerate();
  };

  return (
    <>
      <div>
        <button onClick={() => handleClick("prev")}></button>
        <div className="card" {...onecard}>
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
        <button onClick={() => handleClick("next")}></button>
      </div>
    </>
  );
}
