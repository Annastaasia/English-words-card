import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../assets/image/logo.png";
import { motion } from "framer-motion";
import { TranslationContext } from "../TranslationContext.js";

function Header() {
  const word = React.useContext(TranslationContext);
  return (
    <>
      <header>
        <motion.div
          className="App__header"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/English-words-card">
            <motion.img
              src={mainLogo}
              alt="logo"
              className="App__header__logo"
              whileHover={{ opacity: 0.8 }}
            />
          </Link>
          <h1 className="App__header__h1"> {word.title}</h1>
          <div className="App__header__buttons">
            <Link to="/game">
              <motion.button
                className="App__header__game"
                whileHover={{ scale: 1.2 }}
              ></motion.button>
            </Link>
            <Link to="/English-words-card">
              <motion.button
                className="App__header__home"
                whileHover={{ scale: 1.2 }}
              ></motion.button>
            </Link>
          </div>
        </motion.div>
      </header>
    </>
  );
}

export default Header;
