import React from "react";
import styles from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "@containers/HomePage/HomePage";
import AllProducts from "@containers/AllProducts/AllProducts";
import Header from "@components/Header/Header";
import ProductPage from "@containers/ProductPage/ProductPage";
import CartPage from "@containers/CartPage/CartPage";
import SearchPage from "@containers/SearchPage/SearchPage";
import Footer from "@components/Footer/Footer";

function App() {
  return (
    <div className={styles.app__wrapper}>
      <Header />
      <div className={styles.app__content}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
