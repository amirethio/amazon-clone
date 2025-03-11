import { useParams } from "react-router-dom";
import baseUrl from "../../Api/baseUrl";
import { useEffect, useState } from "react";
import axios from "axios";
import LayOut from "../../components/LayOut/LayOut";
import Loader from "../../components/Loader/Loader";
import ProductCard from "../../components/Product/ProductCard";

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
            <ProductCard key={singlePro.id} data={singlePro} des={true} />
          </LayOut>
        </>
      )}
    </>
  );
}

export default ProductDetail;
