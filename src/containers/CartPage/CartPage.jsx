import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./CartPage.module.css";
import ProductsList from "@components/ProductPage/ProductsList/ProductsList";
import CartProductsList from "@components/CartPage/CartProductsList/CartProductsList";
const CartPage = () => {
  const cartState = useSelector((state) => state.cartReduceer);
  useEffect(() => {
    console.log(cartState);
  });
  return (
    <div>{cartState && <CartProductsList products={cartState.items} />}</div>
  );
};

export default CartPage;
