import React, { useState } from "react";
import styles from "./CategoryFilter.module.css";
import filterImg from "./img/filter.svg";
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
    <div className={styles.container}>
      <div className={styles.filter__button} onClick={handleToggleCategory}>
        <span className={styles.filter__block}>
          Filter
          <img className={styles.img__filter} src={filterImg} alt="Filter" />
        </span>
        {isOpen && (
          <ul className={styles.list_wrapper}>
            <li
              onClick={() => handleCategorySelect("")}
              className={styles.list_item}
            >
              all categories
            </li>
            {categories.map((category) => (
              <li
                className={styles.list_item}
                key={category}
                onClick={() => handleCategorySelect(`${category}`)}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
