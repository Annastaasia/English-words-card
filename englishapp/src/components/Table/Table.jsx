import React, { useState } from "react";
import { motion } from "framer-motion";
import "./table.module.scss";
import { useDispatch } from "react-redux";
import DELITE from "../../redux/DELITE.js";
import UPDATE from "../../redux/UPDATE.js";
import updateWordAndApi from "../../redux/store.js";

export default function Table(props) {
  const { id } = props;
  const [userId, SetuserId] = useState("");
  const [userEnglish, SetuserEnglish] = useState(props.english);
  const [userTranscription, SetuserTranscription] = useState(
    props.transcription
  );
  const [userRussian, SetuserRussian] = useState(props.russian);
  const [userTags, SetuserTags] = useState(props.tags);

  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      !userEnglish.trim() ||
      !userTranscription.trim() ||
      !userRussian.trim() ||
      !userTags.trim()
    ) {
      alert("Please fill in all fields");
      return;
    }
    const updatedWord = {
      id: userId,
      english: userEnglish,
      transcription: userTranscription,
      russian: userRussian,
      tags: userTags,
    };

    const response = await UPDATE(updatedWord);
    if (response) {
      dispatch(updateWordAndApi(response));
    }

    setIsEdit(false);
  };

  function onEditClick() {
    SetuserId(id);
    setIsEdit(!isEdit);
  }

  function onCancelClick() {
    clearForm();
    setIsEdit(!isEdit);
  }

  const clearForm = () => {
    SetuserId("");
    SetuserEnglish("");
    SetuserTranscription("");
    SetuserRussian("");
    SetuserTags("");
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        className="table"
        initial={{ opacity: 0, scale: 3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="table_number">№ {props.num}</div>

        {isEdit ? (
          <>
            <div className="form-control">
              <input
                className="table_input"
                type="text"
                value={userEnglish}
                onChange={(e) => SetuserEnglish(e.target.value)}
                name="english"
              />
            </div>

            <div className="form-control">
              <input
                className="table_input"
                type="text"
                value={userTranscription}
                onChange={(e) => SetuserTranscription(e.target.value)}
                name="transcription"
              />
            </div>

            <div className="form-control">
              <input
                className="table_input"
                type="text"
                value={userRussian}
                onChange={(e) => SetuserRussian(e.target.value)}
                name="russian"
              />
            </div>

            <div className="form-control">
              <input
                className="table_input"
                type="text"
                value={userTags}
                onChange={(e) => SetuserTags(e.target.value)}
                name="tags"
              />
            </div>

            <div className="table_buttons">
              <button
                type="submit"
                onClick={onSubmit}
                className="table_save"
              ></button>
              <button className="table_close" onClick={onCancelClick}></button>
            </div>
          </>
        ) : (
          <>
            <div>
              <h2 className="table_title"> {props.english}</h2>
            </div>

            <p className="table_transcription">{props.transcription}</p>

            <p className="table_translate">{props.russian}</p>

            <div className="table_tags">{props.tags}</div>

            <div className="table_buttons">
              <button className="table_edit" onClick={onEditClick}></button>
              <button
                className="table_delete"
                onClick={() => DELITE(id)}
              ></button>
            </div>
          </>
        )}
      </motion.form>
    </>
  );
}

// // {/* <div className="form-control">
// //               <input
// //                 // className={`"table_input" ${
// //                 //   errors.english && "table_input--error"
// //                 // }`}
// //                 className="table_input"
// //                 type="text"
// //                 value={userEnglish}
// //                 onChange={(e) => SetuserEnglish(e.target.value)}
// //                 name="english"
// //                 // {...register("english", {
// //                 //   required: true,
// //                 //   validate: {
// //                 //     checkLength: (value) => value.length > 1,
// //                 //     matchPattern: (value) => /^[a-zA-Z-`]+$/.test(value),
// //                 //   },
// //                 // })}
// //               />
// //               {/* {errors.english?.type === "checkLength" && (
// //                 <p className="errorMsg">
// //                   Word should be contain more than 1 character
// //                 </p>
// //               )}
// //               {errors.english?.type === "matchPattern" && (
// //                 <p className="errorMsg">Use latin letters</p>
// //               )} */}
//             </div> */}

// function onSaveClick() {
//   if (
//     inputText.id === "" ||
//     inputText.english === "" ||
//     inputText.transcription === "" ||
//     inputText.russian === "" ||
//     inputText.tags === ""
//   ) {
//     alert("Error: Please fill in all the fields");
//   } else {
//     console.log("Form parameters:", inputText);
//     updateWord(inputText);
//     setIsEdit(false); // закрывает режим редактирования
//   }
// }
