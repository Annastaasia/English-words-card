import loading from "../assets/image/loading.gif";
import "../style/context.module.scss";

export default function Loader() {
  const styles = {
    height: "80vh",
    margin: "1% 13%",
  };

  const styles__p = {
    margin: "4% 46%",
    color: "rgb(28, 92, 194)",
    fontSize: "2.5em",
  };

  return (
    <div className="Container">
      <p style={styles__p}>Loading...</p>
      <img src={loading} alt="loading" style={styles} />
    </div>
  );
}
