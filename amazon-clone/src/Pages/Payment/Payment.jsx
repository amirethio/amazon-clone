import React, { useContext, useState } from "react";
import styles from "./payment.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import ProductCard from "./../../components/Product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { type } from "../../utility/actiontype";
import { AxiosInstance } from "../../Api/axios";
import { db } from "../../utility/firebase";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore"; 
function Payment() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const [processing, setProcessing] = useState(false);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const [cardError, setcardError] = useState(null);
  const subtotal = basket.reduce(
    (sum, item) => sum + item.price * item.amount,
    0
  );
  const stripe = useStripe();
  const navigate = useNavigate();
  const elements = useElements();

  const handleChange = (e) => {
 if (e?.error?.message) {
   setcardError(e.error.message);
 } else {
   setcardError("");
 }
  };
  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      setProcessing(true);

      // Step 1: Request a payment intent from backend
      const response = await AxiosInstance.post(
        `/payment/create?total=${subtotal * 100}`
      );

      const clientSecret = response?.data?.clientSecret;
      // console.log(clientSecret);

      if (!stripe || !elements) {
        console.error("Stripe.js has not loaded yet.");
        return;
      }

      // Step 2: Confirm payment
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      // console.log(paymentIntent);

      // Step 3: Save order to Firestore
      await setDoc(
        doc(collection(db, "users", user?.uid, "orders"), paymentIntent.id),
        {
          basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        }
      );

      // Step 4: Clear basket
     dispatch({ type: type.EMPITY_BASKET });

      setProcessing(false);
      navigate("/Orders", {
        state: { msg: "Your order has been placed successfully!" },
      });
    } catch (error) {
      console.error("Payment error:", error.message);
      setProcessing(false);
    }
  };
  return (
    <LayOut>
      {/* header */}
      <div className={styles.Payment_header}>({totalItem})</div>
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
              <form onSubmit={handlePayment}>
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
                    <CurrencyFormat>{total}</CurrencyFormat>
                  </span>
                </div>
                <div>
                  <button type="submit">
                    {processing ? (
                      <div className={styles.loading}>
                        <ClipLoader color="dark" size={12} />
                        <p>please wait ...</p>
                      </div>
                    ) : (
                      "Buy Now"
                    )}
                  </button>
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
