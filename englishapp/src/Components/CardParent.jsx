import React from "react";
import cards from "../utils/card";

class CardParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: cards[0],
    };
  }

  tick = () => {
    let activeIndex = this.state.activeIndex;
    if (activeIndex === this.props.cards.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    this.setState({
      activeIndex,
    });
  };

  render() {
    return (
      <div>
        {this.props.cards[this.state.activeIndex]}
        <button onClick={this.tick}>show Next</button>
      </div>
    );
  }
}

export default CardParent;


import React, { useState } from 'react';

import Array from './arraywords';

import "../styles/Cardword.css";

function Cardword() {
    const [word, setWord] = useState(Array[0]);
    const [transcr, setTranscr] = useState(false);

    const handleChange = () => {
        setTranscr(true);
    }

    const arrayRandElement = (arr) => {
        var rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }

    const newWord = () => {
        let randomword = {};
        randomword = arrayRandElement(Array);
        console.log(randomword)
        setWord(word === randomword);
        console.log(word);
    }

    return (
        <div className='card-train'>
            <div className='card-train-word'>
                <p>Тема - {word.tags}</p>
                <p className='card-train-word-high'>{word.english}</p>
                <p>{word.transcription}</p>
                <p className='card-train-transcr-word'>{transcr ? word.russian : <button onClick={handleChange}>Проверить</button>}</p>
            </div>
            <div className='card-train-button'><button onClick={newWord}>Новое слово</button></div>
        </div>
    )
}

export default Cardword;
