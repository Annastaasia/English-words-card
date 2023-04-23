import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { Context } from "../Context.js";
import "./table.module.scss";

export default function Table(props) {
  const { id, english, transcription, russian, tags } = props;
  const { updateWord, deleteWord } = useContext(Context);
  const [isEdit, setIsEdit] = useState(false);
  const [inputText, setInputText] = useState(props);
  const [isEmpty, setIsEmpty] = useState(true);

  const onChange = (event) => {
    setInputText({
      ...inputText,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (
      inputText.id === "" ||
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

  const errorClass = (value) => {
    return typeof value === "string" && value.trim() === "" ? "error" : "";
  };

  function onEditClick() {
    setIsEdit(!isEdit);
  }

  function onCancelClick() {
    setInputText(props);
    setIsEdit(!isEdit);
  }

  function onSaveClick() {
    if (
      inputText.id === "" ||
      inputText.english === "" ||
      inputText.transcription === "" ||
      inputText.russian === "" ||
      inputText.tags === ""
    ) {
      alert("Error: Please fill in all the fields");
    } else {
      console.log("Form parameters:", inputText);
      updateWord(inputText);
      setIsEdit(false); // закрывает режим редактирования
    }
  }

  return (
    <>
      <motion.div
        className="table"
        initial={{ opacity: 0, scale: 3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="table-number">№ {props.number}</div>

        {isEdit ? (
          <>
            <input
              className={`table-input ${errorClass(inputText.english)}`}
              type="text"
              name="english"
              value={inputText.english}
              onChange={onChange}
            />
            <input
              className={`table-input ${errorClass(inputText.transcription)}`}
              type="text"
              name="transcription"
              value={inputText.transcription}
              onChange={onChange}
            />
            <input
              className={`table-input ${errorClass(inputText.russian)}`}
              type="text"
              name="russian"
              value={inputText.russian}
              onChange={onChange}
            />
            <input
              type="text"
              value={inputText.tags}
              name="tags"
              className={`table-input ${errorClass(inputText.tags)}`}
              onChange={onChange}
            />
            <div className="table_buttons">
              <button
                type="button"
                onClick={onSaveClick}
                className={` table_save ${isEmpty ? "disabled" : ""}`}
              ></button>
              <button className="table_close" onClick={onCancelClick}></button>
            </div>
          </>
        ) : (
          <>
            <div>
              <h2 className="table_title"> {english}</h2>
            </div>

            <p className="table_transcription">{transcription}</p>

            <div className="table_russian">{russian}</div>

            <p className="table_russian">{tags}</p>

            <div className="table_buttons">
              <button className="table_edit" onClick={onEditClick}></button>
              <button
                className="table_delete"
                onClick={() => deleteWord(id)}
              ></button>
            </div>
          </>
        )}
      </motion.div>
    </>
  );
}

// const handleChangeInput = (event) => {
//   setState({
//     ...state,
//     [event.target.name]: event.target.value,
//   });
// };

// const handleChangeSave = (event) => {
//   event.preventDefault();
//   onSubmit();
//   if (
//     state.english !== "" &&
//     state.transcription !== "" &&
//     state.russian !== ""
//   ) {
//     setPressed(!pressed);
//   }
//   editWords(state);
// };
