import React, { useState, useContext, useEffect } from "react";
import { Context } from "../Components/Context.js";
import { motion } from "framer-motion";

export default function AddWord(props) {
  const { addWord } = useContext(Context);
  const [inputText, setInputText] = useState(props);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleChangeInput = (event) => {
    setInputText({
      ...inputText,
      [event.target.name]: event.target.value,
    });

    if (event.target.value.match(/[0-9]/)) {
      alert("Пожалуйста, вводите только буквы");
    } else if (event.target.value === "") {
      alert("Пожалуйста, заполните все поля");
    }
  };

  useEffect(() => {
    if (
      inputText.english === "" ||
      inputText.transcription === "" ||
      inputText.russian === "" ||
      inputText.tags === ""
    ) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [inputText]);

  // const errorClass = (value) => {
  //   return typeof value === "string" && value.trim() === "" ? "error" : "";
  // };

  function onSubmit() {
    if (
      inputText.english === "" ||
      inputText.transcription === "" ||
      inputText.russian === "" ||
      inputText.tags === ""
    ) {
      alert("Error: Please fill in all the fields");
    } else {
      console.log("Form parameters:", inputText);
      addWord(inputText);
      setIsEmpty();
    }
  }

  const clearForm = () => {
    setIsEmpty();
  };

  return (
    <>
      <main className="container">
        <motion.form
          className="table"
          initial={{ opacity: 0, scale: 3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="table_number">Add new word:</div>

          <input
            type="text"
            className={`form-input ${inputText.english}`}
            placeholder="English word"
            name="english"
            value={inputText.english || ""}
            onChange={handleChangeInput}
          />

          <input
            type="text"
            className={`form-input ${inputText.transcription}`}
            placeholder="Transcription word"
            name="transcription"
            value={inputText.transcription || ""}
            onChange={handleChangeInput}
          />

          <input
            type="text"
            className={`form-input ${inputText.russian}`}
            placeholder="Russian word"
            name="russian"
            value={inputText.russian || ""}
            onChange={handleChangeInput}
          />

          <input
            type="text"
            className={`form-input ${inputText.tags}`}
            placeholder="Tags"
            name="tags"
            value={inputText.tags || ""}
            onChange={handleChangeInput}
          />

          <div className="table_buttons">
            <button
              type="button"
              onClick={onSubmit}
              className={` table_save ${isEmpty ? "disabled" : ""}`}
            ></button>
            <button className="table_close" onClick={clearForm}></button>
          </div>
        </motion.form>
      </main>
    </>
  );
}
