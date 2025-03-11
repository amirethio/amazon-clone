import React, { useContext, useState } from "react";
import styles from "./payment.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import ProductCard from "./../../components/Product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
function Payment() {
  const [{ user, basket }] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const total = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const [cardError, setcardError] = useState(null);
  const strip = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    console.log(e);

    // e?error?.message ? setcardError(e.error.message) : setcardError("")
  };
  return (
    <LayOut>
      {/* header */}
      <div className={styles.Payment_header}>{/* checkout */}</div>
      {/* payment method */}
      <section className={styles.Payment}>
        {/* adress */}
        <div className={styles.flex}>
          <h2>Delivery Adress</h2>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago , IL</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={styles.flex}>
          <h2>Review items and delivery</h2>
          <div>
            {basket?.map((item, i) => (
              <ProductCard data={item} key={i} flex={true} cart={false} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={styles.flex}>
          <h2>payment methods</h2>
          <div className={styles.payment_card_container}>
            <div className={styles.payment_detail}>
              <form action="">
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card element */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div>
                  <span style={{ display: "flex", gap: "10px" }}>
                    <p> Total Oredr | </p>{" "}
                    <CurrencyFormat> {total} </CurrencyFormat>
                  </span>
                </div>
                <div>
                  <button> Play Now </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
