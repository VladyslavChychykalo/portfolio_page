import React from "react";
import items from "../../../storage/portfolio.json";
import Icon from "../../../images/icons/portfolioIcons";
import styles from "./Category.module.css";
import svgPage from "../../../images/svg/algorithm.svg";
import svgCode from "../../../images/svg/binary-code.svg";
// import { ReactSVG } from "react-svg";

const Category = ({ category }) => (
  <div>
    {items
      .filter(item => item.category === category)
      .map(item => (
        <div>
          <h3>{item.title}</h3>
          <a className={styles.link} href={item.linkPage}>
            <Icon svgIcon={svgPage} />
          </a>
          <a href={item.linkCode}>
            {/* <ReactSVG src={pukan} className={styles.svgImages} /> */}
            <Icon svgIcon={svgCode} />
          </a>
        </div>
      ))}
  </div>
);

export default Category;
