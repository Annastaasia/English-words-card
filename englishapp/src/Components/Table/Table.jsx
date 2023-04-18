import React, { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Context } from "../Context.js";
import "./table.module.scss";

export default function Table(props) {
  const [pressed, setPressed] = useState(false);
  const [state, setState] = useState(props);
  //const { updateWord } = useContext(Context);
  const { editWords, dictionary, deleteWords } = useContext(Context);
  const [wordCollection, setwordCollection] = useState(dictionary);

  // const methods = useForm();
  // const method = useFormContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (id) => {
    // const formData = new FormData();
    // formData.append("english", id.english);
    // formData.append("transcription", id.transcription);
    // formData.append("russian", id.russian);

    // fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    //addWords(state);
    //setState();
    console.log(id); //здесь выводятся данные, если заполнено всё верно
  };

  const handleChange = () => {
    setPressed(!pressed);
  };

  const handleChangeInput = (event) => {
    setState({
      ...state,
      [event.target.dataset.name]: event.target.value,
    });
  };

  const handleChangeSave = (event) => {
    event.preventDefault();
    onSubmit();
    if (
      state.english !== "" &&
      state.transcription !== "" &&
      state.russian !== ""
    ) {
      setPressed(!pressed);
    }
    editWords(state);
  };

  useEffect(() => {
    setwordCollection(dictionary);
  }, [dictionary]);

  const onDelete = (id) => {
    deleteWords(id);
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
                data-name={"english"}
                onChange={handleChangeInput}
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
                data-name={"transcription"}
                onChange={handleChangeInput}
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
                data-name={"russian"}
                onChange={handleChangeInput}
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
                //type="submit"
                //onClick={handleChange}
                onClick={handleChangeSave}
                // onClick={handleSubmit((data) => console.log(data))}
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
              <button
                className="table_delete"
                onClick={() => onDelete(props.id)}
              ></button>
            </div>
          </>
        )}
      </motion.form>
    </>
  );
}
