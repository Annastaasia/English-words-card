import React, { useState } from "react";
// import { Context } from "./Context.js";
import { motion } from "framer-motion";
// import { useForm } from "react-hook-form";

export default function AddWord(props) {
  // const { addWords } = useContext(Context);
  const [state, setState] = useState();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   mode: "onChange",
  // });

  const onSubmit = (data) => {
    console.log(data); //здесь выводятся данные, если заполнено всё верно
  };

  const handleChangeInput = (event) => {
    setState({
      ...state,
      [event.target.dataset.name]: event.target.value,
    });

    if (event.target.value.match(/[0-9]/)) {
      alert("Пожалуйста, вводите только буквы");
    } else if (event.target.value === "") {
      alert("Пожалуйста, заполните все поля");
    }
  };

  return (
    <>
      <main className="container">
        <motion.form
          className="table"
          onSubmit={onSubmit}
          initial={{ opacity: 0, scale: 3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="table_number">Add new word:</div>

          <input
            type="text"
            className="form-input"
            placeholder="English word"
            name="english"
            onChange={handleChangeInput}
          />

          <input
            type="text"
            className="form-input"
            placeholder="Transcription word"
            name="transcription"
            onChange={handleChangeInput}
          />

          {/* <div className="form-control"> */}
          <input
            type="text"
            className="form-input"
            placeholder="Russian word"
            name="russian"
            onChange={handleChangeInput}
          />
          {/* </div>
          <div className="form-control"> */}
          <input
            type="text"
            className="form-input"
            placeholder="Tags"
            name="tags"
            onChange={handleChangeInput}
          />
          {/* </div> */}
          <div className="table_buttons">
            <button
              type="button"
              onClick={onSubmit}
              className="table_save"
            ></button>
            <button className="table_close"></button>
          </div>
        </motion.form>
      </main>
    </>
  );
}

// const clearForm = () => {
//   setState();
// };

// const onSubmit = () => {
//   if (
//     state.english !== "" &&
//     state.transcription !== "" &&
//     state.russian !== ""
//   ) {
//     addWords(state);
//     setState();
//   }
// };
