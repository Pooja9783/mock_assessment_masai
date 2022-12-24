import { GET_DATA_API } from "./actionType";

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA_API:
      return action.payload;
    default:
      return state;
  }
};
