import React from "react";
import styles from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "@containers/HomePage/HomePage";
import AllProducts from "@containers/AllProducts/AllProducts";
import Header from "@components/Header/Header";
import ProductPage from "@containers/ProductPage/ProductPage";

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
