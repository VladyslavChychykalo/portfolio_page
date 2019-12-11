import React from "react";
import items from "../../../storage/portfolio.json";
import Icon from "../../../images/icons/portfolioIcons";
import styles from "./Category.module.css";
import svgPage from "../../../images/svg/algorithm.svg";
import svgCode from "../../../images/svg/binary-code.svg";
// import { ReactSVG } from "react-svg";

const Category = ({ category }) => (
  <div className={styles.gallery}>
    {items
      .filter(item => item.category === category)
      .map(item => (
        <div className={styles.galleryItem}>
          <h3>{item.title}</h3>
          <div>
            <a href={item.linkPage}>
              <Icon svgIcon={svgPage} />
              {/* <span>Page</span> */}
            </a>
            <a href={item.linkCode}>
              {/* <ReactSVG src={pukan} className={styles.svgImages} /> */}
              <Icon svgIcon={svgCode} />
              {/* <span>Code</span> */}
            </a>
          </div>
        </div>
      ))}
  </div>
);

export default Category;
