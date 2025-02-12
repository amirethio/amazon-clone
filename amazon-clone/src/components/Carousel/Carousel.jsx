import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import images from "./img/data";
import css from "./carousel.module.css";

function CarouselEffect() {
  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        interval={3000}
        transitionTime={500}
        swipeable={true}
        showIndicators={false}
      >
        <div className={css.carousel_img}>
          {images.map((imgLink, index) => {
            return <img src={imgLink} alt="" key={index} />;
          })}
        </div>
      </Carousel>
      <div className={css.hero_img}></div>
    </>
  );
}

export default CarouselEffect;
