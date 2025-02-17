import data from "./Catagorydata"
import Catagorycard from './Catagorycard'
import styles from "./Catagorycard.module.css";
function Catagory() {
  return (
    <>
    <section className={styles.outer_catagoty}>
      <section className={styles.Catagory_wrapper}>
      {data.map((info) => (
        <Catagorycard info={info} key="" />
      ))}
      </section>
      </section>
    </>
  );
}

export default Catagory