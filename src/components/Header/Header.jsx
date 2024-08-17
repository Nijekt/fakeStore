import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.nav__item}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className={styles.nav__item}>
        <NavLink to="./all">All</NavLink>
      </li>
    </ul>
  );
};

export default Header;
