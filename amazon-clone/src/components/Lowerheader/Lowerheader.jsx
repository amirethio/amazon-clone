import { IoMdMenu } from "react-icons/io";
import css from "./lowerheader.module.css"
function Lowerheader() {
  return (
    <div className={css.lower_container}>
      <ul>
        <li className={css.menuall}>
          <IoMdMenu />
          <p>All</p>
        </li>
        <li>Today&#39;s Deals</li>
        <li> customer Services </li>
        <li>Registory</li>
        <li>Gift card</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default Lowerheader;
