import StarRatings from "react-star-ratings";
import styles from "./Product.module.css"
import { Link } from "react-router-dom";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";

function ProductCard({ data }) {
  const {image ,title,rating ,price,id} = data
  return (
    <>
      <div className={styles.card}>
        <Link to={`/product/${id}`}>
          <img src={image} alt="" />
        </Link>
        <div className={styles.product_content}>
          <h3>{title}</h3>
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
            <CurrencyFormat>
              {price}
            </CurrencyFormat>
           
            <button>add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
