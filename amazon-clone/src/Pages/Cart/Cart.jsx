import  { useContext,  } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import styles from "./cart.module.css";
import { type } from "../../utility/actiontype";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
 const increment= (item)=>{
  dispatch(
    {
      type:type.ADD_TO_BASKET,
item
    }
  )
 } 
  const decrement = (id) => {
    dispatch({
      type: type.REMOVE_FROM_BASKET,
      id,
    });
  }; 
  return (
    <LayOut>
      <section className={styles.container}>
        <div className={styles.cart_container}>
          <h2>Hello</h2>
          <h3>Your shooping basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Opps ! No item in your cart</p>
          ) : (
            basket?.map((item, i) => (
              <>
                <div className={styles.cart_detail}>
                  <ProductCard key={i} data={item} cart={false} des={true} />
                  <div className={styles.btn_container}>
                    <button onClick={() => increment(item)}>
                      <RiArrowUpSLine size={20} />
                    </button>
                    <span>{item.amount}</span>
                    <button onClick={() => decrement(item.id)}>
                      <RiArrowDownSLine size={20} />
                    </button>
                  </div>
                </div>
              </>
            ))
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={styles.subtotal}>
            {" "}
            <div>
              <p>Subtotal ({basket?.length} items )</p>
              <CurrencyFormat>{total}</CurrencyFormat>
            </div>
            <span>
              <input type="checkbox" name="" id="" />
              <small>This order contains agift</small>
            </span>
            <Link to="/payment" className={styles.checkout}> continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
