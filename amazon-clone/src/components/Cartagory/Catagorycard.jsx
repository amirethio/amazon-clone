import { Link } from "react-router-dom";
import styles from "./Catagorycard.module.css";

function Catagorycard({info}) {
  return (
    <>
      <span>
        <div className={styles.card}>
          <Link to={`catagory/${info.category}`}>
            <span className={styles.title}>
              <h3>{info.category}</h3>
            </span>
            <span>
              <img src={info.image} alt={info.title} />
            </span>
            <p>see more</p>
          </Link>
        </div>
      </span>
    </>
  );
}

export default Catagorycard