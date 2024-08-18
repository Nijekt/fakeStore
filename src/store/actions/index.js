import { ADD_TO_CART, REMOVE_FROM_CART } from "@store/constants/actions_type";

export const setProductTOCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
export const removerProductTOCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: { id: productId },
});
