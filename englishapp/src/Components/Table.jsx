import React, { useState } from "react";

export default function Card(props) {
  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed(!pressed);
  };

  return (
    <div className="table">
      <div className="table_number">№ {props.number}</div>

      {pressed ? (
        <>
          <input className="table_input"></input>

          <input className="table_input"></input>

          <input className="table_input"></input>

          <div className="table_buttons">
            <button className="table_save" onClick={handleChange}></button>
            <button className="table_close" onClick={handleChange}></button>
          </div>
        </>
      ) : (
        <>
          <h2 className="table_title"> {props.word}</h2>

          <p className="table_transcription">{props.transcription}</p>

          <div className="table_translate">{props.translate}</div>

          <div className="table_buttons">
            <button className="table_edit" onClick={handleChange}></button>
            <button className="table_delete"></button>
          </div>
        </>
      )}
    </div>
  );
}
