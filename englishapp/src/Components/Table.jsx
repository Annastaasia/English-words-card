import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Table(props) {
  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed(!pressed);
  };

  return (
    <motion.div
      className="table"
      initial={{ opacity: 0, scale: 3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
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
    </motion.div>
  );
}
