
import { useContext, useEffect, useState } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { DataContext } from "../../components/DataProvider/DataProvider";
import styles from "./order.module.css";
import { data } from "react-router-dom";
import ProductCard from "../../components/Product/ProductCard";
import { collection, doc, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../utility/firebase";
function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      const ordersQuery = query(
        collection(db, "users", user.uid, "orders"),
        orderBy("created", "desc")
      );

      onSnapshot(ordersQuery, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      })
    }
    else {
      setOrders([])
    }
  }, []);
  return (
    <LayOut>
      <section className={styles.container}>
        <div className={styles.order_container}>
          <h2>Your Order</h2>
          {orders?.length == 0 && <div style={{padding:'20px'}}> You don&lsquo;t have orders yet.</div>}
          {/* ordered items */}

          <div>
            {orders?.map((eachorder, i) => (
              <div key={i}>
                <hr />
                <p>Order ID: {eachorder?.id}</p>
                {eachorder?.data.basket?.map((order) => (
                  <ProductCard
                    flex={true}
                    data={order}
                    key={order.id}
                    cart={false}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
