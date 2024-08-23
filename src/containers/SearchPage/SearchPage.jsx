import React, { useEffect, useState } from "react";
import styles from "./SearchPage.module.css";
import { getApiResource } from "@utils/netwrok";
import { API_PRODUCTS } from "@constants/api";
import SearchPageInfo from "@components/SearchPage/SearchPageInfo/SearchPageInfo";
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
    <div className={styles.wrapper}>
      <h1 className="header__text">Search</h1>
      <input
        className={styles.input}
        type="text"
        value={inputSearchValue}
        onChange={handleInputChange}
      />
      <SearchPageInfo
        inputSearchValue={inputSearchValue}
        filteredProducts={filteredProducts}
      />
    </div>
  );
};

export default SearchPage;
