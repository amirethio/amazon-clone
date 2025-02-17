import axios from "axios";
import LayOut from "../../components/LayOut/LayOut";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/Product/ProductCard";
import styles from "./../../components/Product/Product.module.css";
import baseUrl from "../../Api/baseUrl";
let a = 10;


function Results() {
  const [product, setProduct] = useState([]);
  const { catagory } = useParams();
  console.log(catagory);

  useEffect(() => {
    axios
      .get(`${baseUrl}/products/category/${catagory}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <LayOut>
      <section className={styles.all_card}>
        {product?.map((singleProduct) => (
          <ProductCard key={singleProduct.id} data={singleProduct} />
        ))}
      </section>
    </LayOut>
  );
}

export default Results;
