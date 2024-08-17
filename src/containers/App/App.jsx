import React from "react";
import styles from "./App.module.css";
import HomePage from "../HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import AllProducts from "../AllProducts/AllProducts";
import Header from "../../components/Header/Header";
import ProductPage from "../ProductPage/ProductPage";

function App() {
  return (
    <div className={styles.app__wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all" element={<AllProducts />} />
        <Route path="/people/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
