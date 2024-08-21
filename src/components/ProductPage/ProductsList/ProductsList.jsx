import React, { useEffect } from "react";
import styles from "./ProductsList.module.css";
import { Link, useParams } from "react-router-dom";
const ProductsList = ({ products }) => {
  const { id } = useParams();
  return (
    <ul className={styles.container}>
      {products.map(({ title, price, image, id }) => (
        <li key={title} className={styles.list__item}>
          <Link to={`/people/${id}`}>
            <img src={image} alt={title} className={styles.item__img} />
            <p className={styles.item__description}>
              <div className={styles.item__price}>{price}</div>
              {title}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
