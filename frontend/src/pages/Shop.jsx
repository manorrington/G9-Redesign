import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import Slider from "../components/Slider/Slider";
import Products from "../components/Products";

function Shop() {
  const [productList, setProductList] = useState([]);
  const endpoint =
    "https://58077mb102.execute-api.us-east-1.amazonaws.com/dev/testdata";
  useEffect(() => {
    Axios.get(endpoint).then((res) => {
      setProductList(res.data);
    });
  }, []);

  return (
    <>
      <Slider />
      <Products />
      {/* <div className="product-card-container">
        {productList.map((val, i) => {
          return (
            <div key={i} className="footer">
              <img src={val.img} alt="test" />
              <h3 className="name">{val.title}</h3>
              <h3 className="price">{val.description}</h3>
              <h3>${val.price}</h3>
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default Shop;
