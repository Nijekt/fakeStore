import React from "react";
import { NavLink } from "react-router-dom";

// import cartimg from "./img/cart.svg";
import styles from "./Header.module.css";
import Cart from "@components/Cart/Cart";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.container}>
        <li className={styles.nav__item}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink to="./all">All</NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink to="./search">Search Page</NavLink>
        </li>
      </ul>
      <Cart />
    </div>
  );
};

export default Header;
