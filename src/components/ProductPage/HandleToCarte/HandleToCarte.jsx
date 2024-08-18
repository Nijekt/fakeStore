import React from "react";
import styles from "./HandleToCarte.module.css";
import Button from "@components/UiComponents/Button/Button";
const HandleToCarte = ({ onClick }) => {
  return (
    <div>
      <Button onClick={onClick}>Add to cart</Button>
    </div>
  );
};

export default HandleToCarte;
