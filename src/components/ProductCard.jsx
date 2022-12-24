import React, { useEffect } from "react";

export default function ProductCard({ products }) {
  return (
    <div>
      {" "}
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
  );
}
