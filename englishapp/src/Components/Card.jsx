import React, { useEffect, useState } from "react";
import Array from "../utils/card.js";

export default function Card() {
  const [pressed, setPressed] = useState(false);
  const [word, setWord] = useState(Array[0]);

  useEffect(() => {
    wordGenerate();
  }, []);

  const handleChange = () => {
    setPressed(!pressed);
  };

  const wordGenerate = () => {
    const randomNumber = Math.floor(Math.random() * Array.length);
    //return arr[randomNumber];
    setWord(Array[randomNumber]);
  };

  // const nextWord = () => {
  //   let randomword = {};
  //   randomword = arrayRandElement(cards);
  //   console.log(randomword);
  //   setWord(word === randomword);
  // };

  const nextWord = () => {
    wordGenerate();
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
