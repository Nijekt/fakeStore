import React, { useEffect, useState } from "react";
import styles from "./ProductPage.module.css";
import { useParams } from "react-router-dom";
import { getApiResource } from "../../utils/netwrok";
import { API_PRODUCTS } from "../../constants/api";
import { useDispatch, useSelector } from "react-redux";
import { removerProductTOCart, setProductTOCart } from "@store/actions";
const ProductPage = () => {
  const [productInfo, setProductInfo] = useState([]);
  const [productImg, setProductImg] = useState(null);
  const [productInCart, setProductInCart] = useState(false);

  const { id } = useParams();

  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReduceer);
  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PRODUCTS}/${id}`);

      if (res) {
        setProductInfo([
          { title: "Name", data: res.title, id: res.id },
          { title: "About", data: res.description, id: res.id },
          { title: "Price", data: res.price, id: res.id },
          {
            title: "Rate",
            data: `Rate: ${res.rating.rate}, Count: ${res.rating.count}`,
            id: res.id,
          },
          { title: "Category", data: res.category, id: res.id },
        ]);
        setProductImg(res.image);
      } else {
        console.log("Error");
      }
    })();
    console.log(productInCart);
  }, []);
  // const handleAddToCart = () => {
  //   const product = {
  //     id,
  //     title: productInfo[0]?.data,
  //     price: productInfo[2]?.data,
  //     image: productImg,
  //   };
  //   dispatch(setProductTOCart(product));
  //   const productInCart = cartState.items.some(
  //     (item) => item.id === product.id
  //   );
  //   console.log(productInCart);
  // };
  // const handleRemoveFromCart = () => {
  //   const productId = id;
  //   dispatch(removerProductTOCart(productId));
  // };
  const handleToggleCart = () => {
    if (productInCart) {
      const productId = id;
      dispatch(removerProductTOCart(productId));
      setProductInCart(false);
    } else {
      const product = {
        id,
        title: productInfo[0]?.data,
        price: productInfo[2]?.data,
        image: productImg,
      };
      dispatch(setProductTOCart(product));
      setProductInCart(true);
    }
  };

  useEffect(() => {
    const isProductInCart = cartState.items.some((item) => item.id === id);
    setProductInCart(isProductInCart);
    console.log("Текущее состояние корзины:", cartState);
  }, [cartState]);
  return (
    <>
      <img src={productImg} alt="" />
      <ul>
        {productInfo.map(({ title, data }, id) => (
          <li key={id}>
            <span>
              {title} : {data}
            </span>
          </li>
        ))}
      </ul>
      <button onClick={handleToggleCart}>
        {productInCart ? "Удалить из корзины" : "Добавить в корзину"}
      </button>
    </>
  );
};

export default ProductPage;
