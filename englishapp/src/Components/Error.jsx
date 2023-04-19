import error from "../assets/image/error.png";
import "../style/context.module.scss";

export default function Error() {
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
      <p style={styles__p}>No connection to server</p>
      <img src={error} alt="error" style={styles} />
    </div>
  );
}
