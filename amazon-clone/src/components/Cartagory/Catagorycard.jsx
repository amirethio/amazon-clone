import styles from "./Catagorycard.module.css";

function Catagorycard({info}) {
  return (
    <>
      <div className={styles.card}>
        <a href="">
          <span className={styles.title}>
            <h3>{info.category}</h3>
          </span>
          <span>
            <img src={info.image} alt={info.title} />
          </span>
          <p>see more</p>
        </a>
      </div>
    </>
  );
}

export default Catagorycard