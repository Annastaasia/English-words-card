import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
// import { useEffect } from "react";
import { post } from "../../redux/action.js";
import POST from "../../redux/POST.js";

export default function AddWord() {
  const [userEnglish, SetuserEnglish] = useState("");
  const [userTranscription, SetuserTranscription] = useState("");
  const [userRussian, SetuserRussian] = useState("");
  const [userTags, SetuserTags] = useState("");

  const dispatch = useDispatch();

  // const addPost = (e) => {
  //   e.preventDefault();
  //   dispatch(
  //     post({
  //       english: userEnglish,
  //       transcription: userTranscription,
  //       russian: userRussian,
  //       tags: userTags,
  //     })
  //   );
  //   SetuserEnglish("");
  //   SetuserTranscription("");
  //   SetuserRussian("");
  //   SetuserTags("");
  // };

  // useEffect(() => {
  //   async function add() {
  //     const data = await POST.post();
  //     dispatch(post(data));
  //   }
  //   add();
  // }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = POST.post({
      english: userEnglish,
      transcription: userTranscription,
      russian: userRussian,
      tags: userTags,
    });
    dispatch(post(data));
    SetuserEnglish("");
    SetuserTranscription("");
    SetuserRussian("");
    SetuserTags("");
  };

  const clearForm = () => {
    SetuserEnglish("");
    SetuserTranscription("");
    SetuserRussian("");
    SetuserTags("");
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
            className={"form-input"}
            placeholder="English word"
            name="english"
            value={userEnglish}
            onChange={(e) => SetuserEnglish(e.target.value)}
          />

          <input
            type="text"
            className={"form-input"}
            placeholder="Transcription word"
            name="transcription"
            value={userTranscription}
            onChange={(e) => SetuserTranscription(e.target.value)}
          />

          <input
            type="text"
            className={"form-input"}
            placeholder="Russian word"
            name="russian"
            value={userRussian}
            onChange={(e) => SetuserRussian(e.target.value)}
          />

          <input
            type="text"
            className={"form-input"}
            placeholder="Tags"
            name="tags"
            value={userTags}
            onChange={(e) => SetuserTags(e.target.value)}
          />

          <div className="table_buttons">
            <button
              type="button"
              onClick={handleSubmit}
              className={" table_save "}
            ></button>
            <button className="table_close" onClick={clearForm}></button>
          </div>
        </motion.form>
      </main>
    </>
  );
}
