import React, { useEffect, useState } from "react";
import { API_PRODUCTS } from "@constants/api";
import ProductsList from "@components/ProductsList/ProductsList";
import { getApiResource } from "@utils/netwrok";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const getRecource = async (url) => {
    const res = await getApiResource(url);

    const productsList = res.map(({ title, price, image, id }) => {
      return {
        title,
        price,
        image,
        id,
      };
    });

    setProducts(productsList);
  };

  useEffect(() => {
    getRecource(API_PRODUCTS);
  });
  return <div>{products && <ProductsList products={products} />}</div>;
};

export default AllProducts;
