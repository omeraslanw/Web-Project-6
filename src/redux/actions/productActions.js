import { ActionTypes } from "../contants/action-types";
export const setProducts = (prdoucts) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: prdoucts,
  };
};

export const selectedProduct = (prdouct) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: prdouct,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
