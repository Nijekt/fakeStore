import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames";
const Button = ({ children, onClick, classes }) => {
  return (
    <button onClick={onClick} className={classNames(styles.button, classes)}>
      {children}
    </button>
  );
};

export default Button;
