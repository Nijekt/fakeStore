import React, { useContext } from "react";
import styles from "./HomePage.module.css";
import { ThemeContext } from "@context/ThemeProvider";
import Button from "@components/UiComponents/Button/Button";
import classNames from "classnames";

const HomePage = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  function changeTheme() {
    setTheme(theme === "texture" ? "dark" : "texture");
  }
  return (
    <div className={styles.container}>
      <h1 className={classNames("header__text", styles.header__text)}>
        Welcome to the Fake Store
      </h1>
      <p>Created by Snizhko Nikita</p>
      <Button onClick={changeTheme}>Change Font Color</Button>
    </div>
  );
};

export default HomePage;
