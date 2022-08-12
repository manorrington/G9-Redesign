import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import "./shop.css";

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
    <div className="products">
      {productList.map((val) => {
        return (
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="front">
                <img src={val.img} alt="test" />
              </div>
              <div className="back">
                <h1 className="name">{val.title}</h1>
                <h2 className="description">{val.description}</h2>
                <h3 className="price">${val.price}</h3>
              </div>
            </div>
          </div>

          // <div className="details">
          //   <img src={val.img} alt="test" />
          //   <h3 className="name">{val.title}</h3>
          //   <h3 className="price">{val.description}</h3>
          //   <h3>${val.price}</h3>
          // </div>
        );
      })}
    </div>
  );
}

export default Shop;
