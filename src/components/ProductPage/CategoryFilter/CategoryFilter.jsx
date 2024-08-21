import React, { useEffect, useState } from "react";
import styles from "./CategoryFilter.module.css";
const CategoryFilter = ({ categories, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleCategory = () => {
    setIsOpen(!isOpen);
  };
  const handleCategorySelect = (category) => {
    onCategoryChange(category);
    setIsOpen(false);
  };
  return (
    <div>
      <p onClick={handleToggleCategory}>Filter</p>
      {isOpen && (
        <ul>
          <li
            onClick={() => handleCategorySelect("")}
            className={styles.dropdownItem}
          >
            all categories
          </li>
          {categories.map((category) => (
            <li onClick={() => handleCategorySelect(`${category}`)}>
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryFilter;
