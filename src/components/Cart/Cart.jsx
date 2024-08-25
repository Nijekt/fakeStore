import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import imgCart from "./Img/cart.svg";
import imgCartRed from "./Img/cartRed.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { ThemeContext } from "@context/ThemeProvider";
const Cart = () => {
  const [count, setCount] = useState();
  const [theme, setTheme] = useContext(ThemeContext);
  const cartState = useSelector((state) => state.cartReduceer);

  useEffect(() => {
    const length = cartState.items.length;
    setCount(length);
  });
  return (
    <div className={styles.wrapper}>
      <Link to="./cart">
        <span className={styles.counter}>{count}</span>
        <img
          className={styles.img}
          src={theme === "texture" ? imgCartRed : imgCart}
          alt=""
        />
      </Link>
    </div>
  );
};

export default Cart;
