import React, { useState } from "react";

export default function Card(props) {
  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed(!pressed);
  };

  return (
    <div className="table" onClick={handleChange}>
      <div className="table_number">№ {props.number}</div>

      <h2 className="table_title"> {props.word}</h2>

      <p className="table_transcription">{props.transcription}</p>

      <div className="table_translate">{props.translate}</div>

      <div className="table_buttons">
        {pressed ? (
          <button className="table_save"></button>
        ) : (
          <button className="table_save_none"></button>
        )}

        <button className="table_edit"></button>

        <button className="table_delete"></button>
      </div>
    </div>
  );
}
