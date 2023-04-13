import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import "./table.module.scss";

export default function Table(props) {
  const [pressed, setPressed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data); //здесь выводятся данные, если заполнено всё верно
  };

  const handleChange = () => {
    setPressed(!pressed);
  };

  return (
    <>
      <motion.form
        className="table"
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, scale: 3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="table_number">№ {props.number}</div>

        {pressed ? (
          <>
            <div className="form-control">
              <input
                className={`"table_input" ${
                  errors.english && "table_input--error"
                }`}
                type="text"
                name="english"
                {...register("english", {
                  required: true,
                  validate: {
                    checkLength: (value) => value.length > 1,
                    matchPattern: (value) => /^[a-zA-Z-`]+$/.test(value),
                  },
                })}
              />
              {errors.english?.type === "checkLength" && (
                <p className="errorMsg">
                  English should be contain more than 1 character
                </p>
              )}
              {errors.english?.type === "matchPattern" && (
                <p className="errorMsg">Use latin letters</p>
              )}
            </div>

            <div className="form-control">
              <input
                className={`"table_input" ${
                  errors.transcription && "table_input--error"
                }`}
                type="text"
                name="transcription"
                {...register("transcription", {
                  required: true,
                  validate: {
                    checkLength: (value) => value.length > 1,
                    matchPattern: (value) => /^[a-zA-Zəɪæɔ_ːˈ-]+$/.test(value),
                  },
                })}
              />
              {errors.transcription?.type === "checkLength" && (
                <p className="errorMsg">
                  Transcription should be at-least 1 characters
                </p>
              )}
              {errors.transcription?.type === "matchPattern" && (
                <p className="errorMsg">Use latin letters</p>
              )}
            </div>

            <div className="form-control">
              <input
                className={`"table_input" ${
                  errors.russian && "table_input--error"
                }`}
                type="text"
                name="russian"
                {...register("russian", {
                  required: true,
                  validate: {
                    checkLength: (value) => value.length > 1,
                    matchPattern: (value) => /^[а-яА-Я-]+$/.test(value),
                  },
                })}
              />
              {errors.russian?.type === "checkLength" && (
                <p className="errorMsg">
                  Russian should be at-least 1 characters
                </p>
              )}
              {errors.russian?.type === "matchPattern" && (
                <p className="errorMsg">Use russian letters</p>
              )}
            </div>

            <div className="table_buttons">
              <button
                type="submit"
                //onClick={handleChange}
                className={` table_save ${errors.english && "disabled"}`}
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

            <div className="table_russian">{props.russian}</div>

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
