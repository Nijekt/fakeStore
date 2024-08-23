import React from "react";
import styles from "./Button.module.css";
const Button = ({ children, onClick, classes }) => {
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
