import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import images from "./img/data";
import css from "./carousel.module.css";

function CarouselEffect() {
  return (
    <>
      <div className={css.outer_cara}>
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
          {images.map((imgLink, index) => (
            <div key={index} className={css.carousel_img}>
              <img src={imgLink} alt={`Slide ${index}`} />
            </div>
          ))}
        </Carousel>
        <div className={css.hero_img}></div>
      </div>
    </>
  );
}

export default CarouselEffect;
