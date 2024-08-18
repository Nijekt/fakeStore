import { ADD_TO_CART, REMOVE_FROM_CART } from "@store/constants/actions_type";

const initialState = {
  items: [],
};

export const cartReduceer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const findIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (findIndex !== -1) {
        const updateItems = [...state.items];
        updateItems[findIndex].quantity += 1;
        return {
          ...state,
          items: updateItems,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
