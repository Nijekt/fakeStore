import React from "react";
import styles from "./ProductPage.module.css";
import { useParams } from "react-router-dom";
const ProductPage = () => {
  const { id } = useParams();
  return <div>Product</div>;
};

export default ProductPage;
