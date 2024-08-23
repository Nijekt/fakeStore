import React from "react";
import { Link } from "react-router-dom";
import styles from "./SearchPageInfo.module.css";
// import styles from "@components/ProductPage/ProductsList/ProductsList.module.css";
const SearchPageInfo = ({ filteredProducts, inputSearchValue }) => {
  return (
    <ul className={styles.container}>
      {inputSearchValue == "" ? (
        <p className={styles.search__start}>Start your searching</p>
      ) : (
        filteredProducts.map(({ title, price, id, image }) => (
          <li key={title} className={styles.list__item}>
            <Link to={`/products/${id}`}>
              <img src={image} alt={title} className={styles.item__img} />
            </Link>
            <div className={styles.item__description}>
              <div className={styles.item__price}>{price}$</div>

              <Link to={`/products/${id}`}>{title}</Link>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default SearchPageInfo;
