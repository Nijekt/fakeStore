import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import imgCart from "./Img/cart.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Cart = () => {
  const [count, setCount] = useState();

  const cartState = useSelector((state) => state.cartReduceer);

  useEffect(() => {
    const length = cartState.items.length;
    setCount(length);
  });
  return (
    <div>
      <Link to="./cart">
        <span className={styles.counter}>{count}</span>
        <img className={styles.img} src={imgCart} alt="" />
      </Link>
    </div>
  );
};

export default Cart;
