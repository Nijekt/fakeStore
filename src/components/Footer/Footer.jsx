import React from "react";
import styles from "./Footer.module.css";
import github from "@static/github.png";
import linkedin from "@static/linkedin.png";
import gmail from "@static/gmail.png";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/Nijekt" target="_blank">
        <img className={styles.img} src={github} alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/snizhko-nikita-639805252/"
        target="_blank"
      >
        {" "}
        <img className={styles.img} src={linkedin} alt="linkedin" />
      </a>

      <img
        className={styles.img}
        src={gmail}
        alt="gmail"
        onClick={() => alert("nikitasnizko111@gmail.com")}
      />
    </div>
  );
};

export default Footer;
