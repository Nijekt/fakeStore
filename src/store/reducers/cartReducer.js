import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "@store/constants/actions_type";

const initialState = {
  items: [],
};

export const cartReduceer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case DECREASE_QUANTITY:
      const finditemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (finditemIndex !== -1) {
        const updateItems = [...state.items];
        if (updateItems[finditemIndex].quantity > 1) {
          updateItems[finditemIndex].quantity -= 1;
          return {
            ...state,
            item: updateItems,
          };
        } else {
          return {
            ...state,
            items: state.items.filter((item) => item.id !== action.payload.id),
          };
        }
      }

    case INCREASE_QUANTITY:
      const findItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const updateItems = [...state.items];
      updateItems[findItemIndex].quantity += 1;
      return {
        ...state,
        items: updateItems,
      };

    default:
      return state;
  }
};
