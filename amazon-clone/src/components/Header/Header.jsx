import { FiShoppingCart } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import us from "./../../assets/united-states.png";
import styles from "./header.module.css";
import Lowerheader from "../Lowerheader/Lowerheader";
import { MdAccountBox } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../utility/firebase";
function Header() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  
  const totalitem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  function signout(){
   if(user){
     auth.signOut();
   }
  }
  return (
    <section className={styles.fixed}>
      <div className={styles.header_container}>
        <span className={styles.inner_header}>
          {/* header left  */}
          <div className={styles.header_container_left}>
            <span className={styles.amazon_logo}>
              <Link to="/" className={styles.link}>
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="azazon"
                />
              </Link>
            </span>
            {/* delivered to .. */}
            <span className={styles.header_deliver}>
              <IoLocationOutline className={styles.location} />
              <span>
                <p>Delivered to</p>
                <p>Ethopian</p>
              </span>
              {/* mobile cart and sccount */}
              <Link
                to={!user && "/auth"}
                className={styles.mobile_account}
                onClick={signout}
              >
                <MdAccountBox />
              </Link>
              <Link to="/Cart" className={styles.cart}>
                <FiShoppingCart />
                <span>{totalitem}</span>
              </Link>
            </span>
          </div>
          {/* header center  */}
          <div className={styles.header_container_center}>
            <span className={styles.header_container_border}>
              <select name="" id="">
                <option value="All">All</option>
              </select>
              <input type="text " name="" id=" " placeholder="Product Search" />
              <spa className={styles.search_container}>
                <IoSearchSharp />
              </spa>
            </span>
          </div>
          {/* heaer right*/}
          <div className={styles.header_container_right}>
            {/* language */}
            <Link className={`${styles.link} ${styles.link_1}`}>
              <img src={us} alt="" />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            {/* sign in */}
            <Link to={!user && "/auth"} className={styles.link}>
              {user ? (
                <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span
                    style={{ fontSize: "16px" }}
                    onClick={() => auth.signOut()}
                  >
                    {" "}
                    sign Out
                  </span>
                </>
              ) : (
                <>
                  <p>Hello, sign In</p>
                  <p>Account & Lists</p>
                </>
              )}
            </Link>
            {/* order */}
            <Link to="/orders" className={styles.link}>
              <p>Returns</p>
              <p>& Orders</p>
            </Link>
            {/* cart */}
            <Link to="/cart" className={`${styles.cart} ${styles.link}`}>
              <FiShoppingCart />
              <span>{totalitem}</span>
            </Link>
          </div>
        </span>
      </div>
      <Lowerheader />
    </section>
  );
}
{
  /* <div className={styles}> */
}
export default Header;
