import React, { useState } from "react";

export default function Card(props) {
  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed(!pressed);
  };

  return (
    <div className="card">
      <h2 className="card-title"> {props.word}</h2>

      <div className="card-transcription">
        Transcription: {props.transcription}
      </div>

      <div className="card-hint"> Hint: {props.hint}</div>

      <div onClick={handleChange}>
        {pressed ? (
          <div className="table_translate">{props.translate}</div>
        ) : (
          <button className="card-answer">I don`t know this word</button>
        )}
      </div>
    </div>
  );
}
