import React, { useState, useEffect } from "react";
import cards from "../utils/card.js";

function Card() {
  const [pressed, setPressed] = useState(false);
  //const [word, setWord] = useState(cards[0]);
  const [index, setIndex] = useState(0);
  let onecard = cards[index];

  // useEffect(() => {
  //   wordGenerate();
  // }, []);

  const handleChange = () => {
    setPressed(!pressed);
  };

  // const wordGenerate = () => {
  //   let randomNumber = Math.floor(Math.random() * cards.length);
  //   //setIndex(cards[randomNumber]);
  //   setIndex(cards[randomNumber]);
  // };

  const nextClick = () => {
    if (index + 1 >= cards.length) {
      setIndex(0);
    } else setIndex(index + 1);
  };

  const prevClick = () => {
    if (index - 1 < 0) {
      setIndex(cards.length - 1);
    } else setIndex(index - 1);
  };

  // const handleClick = (direction) => {
  //   let newIndex = index;

  //   direction === "next" ? ++newIndex : --newIndex;

  //   if (newIndex >= Array.length) {
  //     newIndex = 0;
  //   }

  //   if (newIndex < 0) {
  //     newIndex = Array.length - 1;
  //   }
  //   setIndex(newIndex);
  // };

  // const nextWord = () => {
  //   wordGenerate();
  // };

  return (
    <>
      <main>
        <div className="container__onecard">
          <button onClick={nextClick}></button>
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
          <div>
            <button>Next word</button>
          </div>
          <button onClick={prevClick}></button>
        </div>
      </main>
    </>
  );
}

export default Card;
