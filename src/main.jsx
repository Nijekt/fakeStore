import { createRoot } from "react-dom/client";
import App from "./containers/App/App";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@store/store";
import ThemeProvider from "@context/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
