import StarRatings from "react-star-ratings";
import styles from "./Product.module.css"

function ProductCard({ data }) {
  return (
    <>
      <div className={styles.card}>
        <a href="#">
          <img src={data.image} alt="" />
        </a>
        <div className={styles.product_content}>
          <h3>{data.title}</h3>
          {/* rating and rating number*/}
          <div className={styles.rating}>
            <StarRatings
              rating={data.rating.rate}
              starRatedColor="#FAAF00"
              starHoverColor="#FAAF00"
              changeRating={{}}
              numberOfStars={5}
              starDimension="23px"
              starSpacing="1px"
            />
            {/* rating count number */}
            <p>{data.rating.count}</p>
          </div>
          <div>
            <p>{data.price}</p>
            <button>add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
