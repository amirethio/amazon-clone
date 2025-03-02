import { useParams } from "react-router-dom";
import baseUrl from "../../Api/baseUrl";
import StarRatings from "react-star-ratings";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./prodetail.module.css";
import { Link } from "react-router-dom";
import LayOut from "../../components/LayOut/LayOut";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import Loader from "../../components/Loader/Loader";
import ProductCard from "../../components/Product/ProductCard";
Loader;
function ProductDetail() {
  const { id } = useParams();
  const [singlePro, setSinglePro] = useState({});
  const [Loade, setLoader] = useState(true);
  useEffect(() => {
    axios
      .get(`${baseUrl}/products/${id}`)
      .then((res) => {
        setSinglePro(res.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  }, []);

  return (
    <>
      {Loade ? (
        <Loader />
      ) : (
        <>
          <LayOut>
            <ProductCard key={singlePro.id} data={singlePro}
            des = {true} />
          </LayOut>
        </>
      )}
    </>
  );
}

export default ProductDetail;

/*
<>
              <div className={styles.card}>
                <div className={styles.image_container}>
                  <Link to={`/product/${id}`}>
                    <img src={singlePro.image} alt="" />
                  </Link>
                </div>
                <div className={styles.product_content}>
                  <div>
                    <h3>{singlePro.title}</h3>
                  </div>
                  <div className={styles.product_des}>
                    <p>{singlePro.description}</p>
                  </div>
                  {/* rating and rating number
                  <div className={styles.rating}>
                    <StarRatings
                      rating={singlePro.rating?.rate}
                      starRatedColor="#FAAF00"
                      starHoverColor="#FAAF00"
                      changeRating={{}}
                      numberOfStars={5}
                      starDimension="23px"
                      starSpacing="1px"
                    />
              
                    <p>{singlePro.rating?.count}</p>
                  </div>
                  <div>
                    <CurrencyFormat>{singlePro.price}</CurrencyFormat>
                    <button>add to cart</button>
                  </div>
                </div>
              </div>
            </>
            */