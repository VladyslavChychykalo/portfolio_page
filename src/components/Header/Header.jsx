import React from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import styles from "./Header.module.css";

const Header = () => (
  <div className={styles.headerContainer}>
    <DropDownMenu />
    <h1 className={styles.title}>My portfolio</h1>
  </div>
);

export default Header;
