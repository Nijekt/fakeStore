import React, { useEffect, useState } from "react";
import { API_PRODUCTS } from "@constants/api";
import ProductsList from "@components/ProductPage/ProductsList/ProductsList";
import { getApiResource } from "@utils/netwrok";
import CategoryFilter from "@components/ProductPage/CategoryFilter/CategoryFilter";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const getRecource = async (url) => {
    const res = await getApiResource(url);

    const productsList = res.map(({ title, price, image, id, category }) => {
      return {
        title,
        price,
        image,
        id,
        category,
      };
    });

    setProducts(productsList);
    const categoryFilter = [
      ...new Set(productsList.map((product) => product.category)),
    ];

    setCategories(categoryFilter);
    setFilteredProduct(productsList);
  };

  useEffect(() => {
    getRecource(API_PRODUCTS);
  }, []);
  useEffect(() => {
    if (!selectedCategory) {
      setFilteredProduct(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProduct(filtered);
    }
  }, [selectedCategory, products]);

  return (
    <div>
      <CategoryFilter
        categories={categories}
        onCategoryChange={setSelectedCategory}
      />
      {filteredProduct && <ProductsList products={filteredProduct} />}
    </div>
  );
};

export default AllProducts;
