import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
// import { useForm } from "react-hook-form";
import { Context } from "../Context.js";
import "./table.module.scss";

export default function Table(props) {
  const { english, transcription, russian, tags } = props;
  //const [pressed, setPressed] = useState(false);
  //const [state, setState] = useState(props);
  const { updateWord } = useContext(Context);
  const [isEdit, setIsEdit] = useState(false);
  const [inputText, setInputText] = useState(props);
  const [isEmpty, setIsEmpty] = useState(true);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   mode: "",
  // });

  // const onSubmit = (data) => {
  //   console.log(data); //здесь выводятся данные, если заполнено всё верно
  // };

  // const handleChange = () => {
  //   setPressed(!pressed);
  // };

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

  //вывести в консоль сообщение с параметрами формы и закрыть режим редактирования
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

  const ondelete = () => {
    props.onDelete(props.id);
  };

  return (
    <>
      <motion.div
        className="table"
        // onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, scale: 3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="table-number">№ {props.number}</div>

        {isEdit ? (
          <>
            {/* <p className="table-input">
                <input
                  type="text"
                  value={inputText.id}
                  name="id"
                  className={`card-input ${errorClass(inputText.id)}`}
                  onChange={onChange}
                />
              </p> */}
            <input
              // className={`table-input ${
              //   errors.english && "table_input--error"
              // }`}
              // className={`table-input ${errorClass(inputText.id)}`}
              className={`table-input ${errorClass(inputText.english)}`}
              type="text"
              name="english"
              value={inputText.english}
              onChange={onChange}
              // {...register("english", {
              //   required: true,
              //   validate: {
              //     checkLength: (value) => value.length > 1,
              //     matchPattern: (value) => /^[a-zA-Z-`]+$/.test(value),
              //   },
              // })}
            />
            {/* {errors.english?.type === "checkLength" && (
                <p className="errorMsg">
                  English should be contain more than 1 character
                </p>
              )}
              {errors.english?.type === "matchPattern" && (
                <p className="errorMsg">Use latin letters</p>
              )} */}

            {/* <div className="form-control"> */}
            <input
              // className={`"table_input" ${
              //   errors.transcription && "table_input--error"
              // }`}
              className={`table-input ${errorClass(inputText.transcription)}`}
              type="text"
              name="transcription"
              value={inputText.transcription}
              onChange={onChange}
              // {...register("transcription", {
              //   required: true,
              //   validate: {
              //     checkLength: (value) => value.length > 1,
              //     matchPattern: (value) => /^[a-zA-Zəɪæɔ_ːˈ-]+$/.test(value),
              //   },
              // })}
            />
            {/* {errors.transcription?.type === "checkLength" && (
                <p className="errorMsg">
                  Transcription should be at-least 1 characters
                </p>
              )}
              {errors.transcription?.type === "matchPattern" && (
                <p className="errorMsg">Use latin letters</p>
              )} */}
            {/* </div> */}

            <input
              // className={`"table_input" ${
              //   errors.russian && "table_input--error"
              // }`}
              className={`table-input ${errorClass(inputText.russian)}`}
              type="text"
              name="russian"
              value={inputText.russian}
              onChange={onChange}
              // {...register("russian", {
              //   required: true,
              //   validate: {
              //     checkLength: (value) => value.length > 1,
              //     matchPattern: (value) => /^[а-яА-Я-]+$/.test(value),
              //   },
              // })}
            />
            {/* {errors.russian?.type === "checkLength" && (
                <p className="errorMsg">
                  Russian should be at-least 1 characters
                </p>
              )}
              {errors.russian?.type === "matchPattern" && (
                <p className="errorMsg">Use russian letters</p>
              )} */}

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
                // onClick={handleSubmit((data) => console.log(data))}
                className={` table_save ${isEmpty ? "disabled" : ""}`}
              ></button>
              <button className="table_close" onClick={onCancelClick}></button>
            </div>
          </>
        ) : (
          <>
            {/* <p className="table_transcription">
              <span className="table_transcription"> {id}</span>
            </p> */}
            <div>
              <h2 className="table_title"> {english}</h2>
            </div>

            <p className="table_transcription">{transcription}</p>

            <div className="table_russian">{russian}</div>

            <p className="table_russian">{tags}</p>

            <div className="table_buttons">
              <button className="table_edit" onClick={onEditClick}></button>
              <button className="table_delete" onClick={ondelete}></button>
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
//     [event.target.dataset.name]: event.target.value,
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

// const onSubmit = async (id) => {
//   // const formData = new FormData();
//   // formData.append("english", id.english);
//   // formData.append("transcription", id.transcription);
//   // formData.append("russian", id.russian);

//   // fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
//   //   method: "POST",
//   //   body: JSON.stringify(formData),
//   // })
//   //   .then((response) => {
//   //     console.log(response);
//   //   })
//   //   .catch((error) => {
//   //     console.error(error);
//   //   });

//   //addWords(state);
//   //setState();
//   console.log(id); //здесь выводятся данные, если заполнено всё верно
// };
