import { legacy_createStore as createStore } from "redux";
import rootreducer from "./reducers";
import { setLocalStorage } from "@utils/localStorage";
const store = createStore(rootreducer);

store.subscribe(() => {
  setLocalStorage("store", store.getState().cartReduceer.items);
});
export default store;
