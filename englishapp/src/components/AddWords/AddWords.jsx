import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import POST from "../../redux/POST.js";
import { POST_ACTION } from "../../redux/action.js";

export default function AddWords() {
  const [userEnglish, SetuserEnglish] = useState("");
  const [userTranscription, SetuserTranscription] = useState("");
  const [userRussian, SetuserRussian] = useState("");
  const [userTags, SetuserTags] = useState("");
  // const loading = useSelector((state) => state.loading);
  // const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
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
    const newWord = {
      english: userEnglish,
      transcription: userTranscription,
      russian: userRussian,
      tags: userTags,
    };

    const response = await POST(newWord);

    if (response) {
      dispatch(POST_ACTION(response));
    }

    clearForm();
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
            <button
              className="table_close"
              // disabled={loading}
              onClick={clearForm}
            ></button>
            {/* {error && <p>{error.message}</p>} */}
          </div>
        </motion.form>
      </main>
    </>
  );
}
