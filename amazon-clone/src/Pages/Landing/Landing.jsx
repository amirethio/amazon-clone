
import Catagory from "../../components/Cartagory/Catagory";
import Product from "../../components/Product/Product";
import CarouselEffect from "../../components/Carousel/Carousel";
import LayOut from "../../components/LayOut/LayOut";

function Landing() {
  return (
      <LayOut>
        <CarouselEffect />
        <Catagory />
        <Product />
      </LayOut>
  );
}

export default Landing;
