import StarRatings from "react-star-ratings";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { useContext, useState } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { type } from "../../utility/actiontype";
function ProductCard({ data, des, cart = true, flex }) {
  const { image, title, rating, price, id, description } = data;
  const [state, dispatch] = useContext(DataContext);
  const addToCart = () => {
    dispatch({
      type: type.ADD_TO_BASKET,
      item: {
        id,
        image,
        title,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <>
      <div className={`${flex && styles.flex} ${des ? styles.detail : styles.card}`}>
        <Link to={`/product/${id}`} className={styles.card_img_link}>
          <img src={image} alt="" />
        </Link>
        <div className={styles.product_content}>
          <h3>{title}</h3>
          {/* description */}
          {des && (
            <div className={styles.product_des}>
              <p>{description}</p>
            </div>
          )}
          {/* rating and rating number*/}
          <div className={styles.rating}>
            <StarRatings
              rating={rating?.rate}
              starRatedColor="#FAAF00"
              starHoverColor="#FAAF00"
              changeRating={{}}
              numberOfStars={5}
              starDimension="23px"
              starSpacing="1px"
            />
            {/* rating count number */}
            <p>{rating?.count}</p>
          </div>
          <div>
            <CurrencyFormat>{price}</CurrencyFormat>
            {cart && <button onClick={addToCart}>add to cart</button>}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
