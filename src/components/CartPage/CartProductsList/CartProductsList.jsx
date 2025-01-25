import React, { useEffect, useReducer } from "react";
import styles from "./CartProductsList.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "@store/actions";
import Button from "@components/UiComponents/Button/Button";
const CartProductsList = ({ products }) => {
  const dispatch = useDispatch();

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };
  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const sumPrice = products.reduce((acc, products) => {
    return products.price * products.quantity + acc;
  }, 0);

  return (
    <>
      {products.length == 0 ? (
        <div className={styles.cart__message}>Cart is Empty</div>
      ) : (
        <>
          {" "}
          <ul className={styles.container}>
            {products.map(({ title, price, image, id, quantity }) => (
              <li key={title} className={styles.list__item}>
                <Link to={`/products/${id}`}>
                  <img src={image} alt={title} className={styles.item__img} />{" "}
                </Link>{" "}
                <p className={styles.item__description}>{title}</p>{" "}
                <div className={styles.item__price}>
                  {Number(price * quantity).toFixed(2)}
                </div>
                <div className={styles.quantity__changer}>
                  <Button
                    onClick={() => handleDecrease(id)}
                    classes={styles.button}
                  >
                    -
                  </Button>
                  {quantity}
                  <Button
                    onClick={() => handleIncrease(id)}
                    classes={styles.button}
                  >
                    +
                  </Button>
                </div>
              </li>
            ))}
            <div className={styles.total__price}>
              Total Price: ${Number(sumPrice).toFixed(2)}
            </div>
          </ul>
        </>
      )}
    </>
  );
};

export default CartProductsList;
