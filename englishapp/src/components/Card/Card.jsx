import React, { useState, useEffect, useRef } from "react";
import cards from "../../utils/card.js";
import { motion } from "framer-motion";

function Card(props) {
  const [pressed, setPressed] = useState(false);
  const [index, setIndex] = useState(0);
  const [counter, setCounter] = useState(1);
  const [viewCard, setViewCard] = useState(false);

  const onecard = cards[index];

  const handleChange = () => {
    setPressed(!pressed);
  };

  const handleViewCard = () => {
    if (!viewCard) {
      setViewCard(true);
      props.onLearned();
    }
  };

  const nextClick = () => {
    if (index + 1 >= cards.length) {
      setIndex(0);
    } else setIndex(index + 1);
    setViewCard(false);
    setPressed(false);
    handleCount();
  };

  const prevClick = () => {
    if (index - 1 < 0) {
      setIndex(cards.length - 1);
    } else setIndex(index - 1);
    setViewCard(false);
    setPressed(false);
    handleCountMin();
  };

  const handleCount = () => {
    setCounter(counter + 1);
  };

  const handleCountMin = () => {
    setCounter(counter - 1);
  };

  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <>
      <main>
        <div className="card-learned">
          <button
            className="card-learned-btn"
            onClick={handleViewCard}
            ref={ref}
          >
            I know this word
          </button>
        </div>
        <div className="container__onecard">
          <button className="card-answer" onClick={prevClick}>
            Prev word
          </button>
          <motion.div
            className="card"
            {...index}
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ duration: 1 }}
          >
            <h2 className="card-title"> {onecard.word}</h2>

            <div className="card-transcription">
              Transcription: {onecard.transcription}
            </div>

            <div className="card-hint"> Hint: {onecard.hint}</div>

            <div onClick={handleChange}>
              {pressed ? (
                <div className="table_translate">{onecard.translate}</div>
              ) : (
                <button className="card-answer">Translate</button>
              )}
            </div>
          </motion.div>
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

//onClick={handleLearn}

//onClick={() => childToParent()}
