import { Link } from "react-router-dom";
import noMatch from "../../assets/image/404.png";
import { motion } from "framer-motion";

export default function NoMatch() {
  return (
    <main>
      <motion.div
        className="Nomatch"
        initial={{ opacity: 0, scale: 2 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 360,
          borderRadius: ["100%", "10%"],
        }}
        transition={{ duration: 1 }}
      >
        <img src={noMatch} alt="404" className="Nomatch__img" />
        <p className="Nomatch__p">Oops, page not found!</p>
        <Link to="/English-words-card">
          <button className="Nomatch__p">Back Home page</button>
        </Link>
      </motion.div>
    </main>
  );
}
