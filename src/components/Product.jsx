import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../redux/action";
export default function Product() {
  const disptach = useDispatch();
  useEffect(() => {
    disptach(getProduct());
  }, []);
  const products = useSelector((state) => state);
  // console.log(products);

  return <div></div>;
}
