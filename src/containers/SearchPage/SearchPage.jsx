import React, { useEffect, useState } from "react";
import styles from "./SearchPage.module.css";
import { getApiResource } from "@utils/netwrok";
import { API_PRODUCTS } from "@constants/api";
const SearchPage = () => {
  const [inputSearchValue, setInputSearhgValue] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getApiResource(API_PRODUCTS);
      setAllProducts(res);
    })();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputSearhgValue(value);

    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };
  useEffect(() => {
    console.log(filteredProducts);
  }, [inputSearchValue]);
  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        value={inputSearchValue}
        onChange={handleInputChange}
      />
      <ul>
        {inputSearchValue == "" ? (
          <p>Start your searching</p>
        ) : (
          filteredProducts.map(({ title, price, id, image }) => (
            <li key={id}>
              <img src={image} alt="img" />
              {title}
              {price}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SearchPage;
