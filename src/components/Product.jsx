import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../redux/action";

import "../style/Product.css";
import ProductCard from "./ProductCard";

export default function Product() {
  const disptach = useDispatch();
  useEffect(() => {
    disptach(getProduct());
  }, []);
  const products = useSelector((state) => state.products);
  console.log(products);

  return (
    <div className="Product">
      <div className="prd-div">
        {products.map((ele) => {
          return (
            <div className="product-detail">
              <img src={ele.thumbnail} alt="" />
              <div className="product-details-div">
                <h3>{ele.title}</h3>
                <p>{ele.description}</p>
                <p>Brand : {ele.brand}</p>
                <b>Price : {ele.price}</b>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
