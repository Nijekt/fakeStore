import React, { useEffect, useReducer } from "react";
import styles from "./CartProductsList.module.css";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "@store/actions";
const CartProductsList = ({ products }) => {
  const dispatch = useDispatch();

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };
  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div>
      <ul className={styles.container}>
        {products.map(({ title, price, image, id, quantity }) => (
          <li key={title} className={styles.list__item}>
            <Link to={`/people/${id}`}>
              <img src={image} alt={title} className={styles.item__img} />{" "}
            </Link>{" "}
            <div>
              <button onClick={() => handleIncrease(id)}>+</button> {quantity}{" "}
              <button onClick={() => handleDecrease(id)}>-</button>
            </div>
            <div className={styles.item__price}>{price}</div>
            <p className={styles.item__description}>{title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartProductsList;
