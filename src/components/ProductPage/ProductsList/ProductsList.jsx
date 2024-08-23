import React, { useEffect } from "react";
import styles from "./ProductsList.module.css";
import { Link, useParams } from "react-router-dom";
const ProductsList = ({ products }) => {
  const { id } = useParams();
  return (
    <ul className={styles.container}>
      {products.map(({ title, price, image, id }) => (
        <li key={title} className={styles.list__item}>
          <Link to={`/products/${id}`}>
            <img src={image} alt={title} className={styles.item__img} />
          </Link>
          <div className={styles.item__description}>
            <div className={styles.item__price}>{price}$</div>

            <Link to={`/products/${id}`}>{title}</Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
