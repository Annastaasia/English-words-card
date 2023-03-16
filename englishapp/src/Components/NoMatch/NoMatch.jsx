import { Link } from "react-router-dom";
import noMatch from "../../assets/image/404.png";

export default function NoMatch() {
  return (
    <main>
      <div className="Nomatch">
        <img src={noMatch} alt="404" className="Nomatch__img" />
        <p className="Nomatch__p">Oops, page not found!</p>
        <Link to="/English-words-card">
          <button className="Nomatch__p">Back Home page</button>
        </Link>
      </div>
    </main>
  );
}
