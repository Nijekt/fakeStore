import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "@store/constants/actions_type";
import { getLocalStorage } from "@utils/localStorage";

const initialState = {
  items: getLocalStorage("store") || [],
};

export const cartReduceer = (state = initialState, action) => {
  let updateItems;

  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      updateItems = state.items.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        items: updateItems,
      };

    case DECREASE_QUANTITY:
      const finditemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (finditemIndex !== -1) {
        updateItems = [...state.items];
        if (updateItems[finditemIndex].quantity > 1) {
          updateItems[finditemIndex].quantity -= 1;
        } else {
          updateItems = updateItems.filter(
            (item) => item.id !== action.payload.id
          );
        }
        return {
          ...state,
          items: updateItems,
        };
      }
      break;

    case INCREASE_QUANTITY:
      const findItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findItemIndex !== -1) {
        updateItems = [...state.items];
        updateItems[findItemIndex].quantity += 1;
        return {
          ...state,
          items: updateItems,
        };
      }
      break;

    default:
      return state;
  }
};
