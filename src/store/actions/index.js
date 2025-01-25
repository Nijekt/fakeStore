import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from "@store/constants/actions_type";

export const setProductTOCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
export const removerProductTOCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: { id: productId },
});
export const decreaseQuantity = (productId) => ({
  type: DECREASE_QUANTITY,
  payload: { id: productId },
});
export const increaseQuantity = (productId) => ({
  type: INCREASE_QUANTITY,
  payload: { id: productId },
});
