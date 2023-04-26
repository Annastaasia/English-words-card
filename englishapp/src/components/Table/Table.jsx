import React, { useState } from "react";
import { motion } from "framer-motion";
import "./table.module.scss";
// import { useDispatch } from "react-redux";

export default function Table(props) {
  const [userEnglish, SetuserEnglish] = useState("");
  const [userTranscription, SetuserTranscription] = useState("");
  const [userRussian, SetuserRussian] = useState("");
  const [userTags, SetuserTags] = useState("");

  // const dispatch = useDispatch();

  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed(!pressed);
  };

  return (
    <>
      <motion.form
        className="table"
        initial={{ opacity: 0, scale: 3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="table_number">№ {props.num}</div>

        {pressed ? (
          <>
            <div className="form-control">
              <input
                // className={`"table_input" ${
                //   errors.english && "table_input--error"
                // }`}
                className="table_input"
                type="text"
                value={userEnglish}
                onChange={(e) => SetuserEnglish(e.target.value)}
                name="english"
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
                  Word should be contain more than 1 character
                </p>
              )}
              {errors.english?.type === "matchPattern" && (
                <p className="errorMsg">Use latin letters</p>
              )} */}
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
                // onClick={}
                className="table_save"
              ></button>
              <button className="table_close" onClick={handleChange}></button>
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
              <button className="table_edit" onClick={handleChange}></button>
              <button className="table_delete"></button>
            </div>
          </>
        )}
      </motion.form>
    </>
  );
}
