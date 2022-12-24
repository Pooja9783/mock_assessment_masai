import axios from "axios";

import { GET_DATA_API } from "./actionType";

export const getProduct = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://dummyjson.com/products`);
    dispatch({ type: GET_DATA_API, payload: res.data.products });
  } catch (err) {
    console.log("Error while call API", err.message);
  }
};
