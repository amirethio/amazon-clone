import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./Product.module.css";

function Product() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>               
      <section className={styles.all_card}>
        {product?.map((singleProduct) => (
          <ProductCard key={singleProduct.id} data={singleProduct} />
        ))} 
        {console.log(product)}
      </section>
    </>
  );
}

export default Product;
