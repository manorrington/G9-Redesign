import { useState } from "react";
import { useEffect } from "react";
// import { Link } from "react-router-dom" 
import Axios from "axios";

function Testing() {
  const [productList, setProductList] = useState([]);
  const endpoint =
    "https://58077mb102.execute-api.us-east-1.amazonaws.com/dev/testdata";
  useEffect(() => {
    Axios.get(endpoint).then((res) => {
      setProductList(res.data);
    });
  }, []);



  return(
    <>
      <div className="product-card-container">
        {productList.map((val) => {
          return (
            <div className="footer">
              <img src={val.img} alt="test" />
              {/* <Link to={`/images/${val.img}`}> */}
              {/* <img src='/images/bestseller1.png' alt="test" /> */}
              {/* </Link> */}
              <h3 className="name">{val.title}</h3>
              <h3 className="price">{val.description}</h3>
              <h3>${val.price}</h3>
            </div>
          );
        })}
      </div>
  </>
  );
}

export default Testing;