import React from "react";
import { ReactSVG } from "react-svg";
import items from "../../storage/portfolio.json";
import styles from "./Main.module.css";
import Icon from "../../images/icons/portfolioIcons";
import pukan from "../../images/svg/binary-code.svg";

const Main = () => (
  <div>
    <div>
      <h2>HTML/CSS</h2>
      {items
        .filter(item => item.category === "HTML/CSS")
        .map(item => (
          <div>
            <h3>{item.title}</h3>
            <a className={styles.link} href={item.linkPage}>
              <Icon />
              <ReactSVG src={pukan} className={styles.svgImages} />
            </a>
            <a href={item.linkCode}>
              <svg className={styles.svgImages}>
                <use xlinkHref="../../images/svg/portfolio-svg.svg#icon-code"></use>
              </svg>
            </a>
          </div>
        ))}
    </div>
    <div>
      <h2>JS</h2>
      {items
        .filter(item => item.category === "JS")
        .map(item => (
          <div>
            <h3>{item.title}</h3>
            <a href={item.linkPage}>
              <svg className={styles.svgImages} width="32px" height="32px">
                <use href="../../images/svg/portfolio-svg.svg#icon-page"></use>
              </svg>
            </a>
            <a href={item.linkCode}>
              <svg className={styles.svgImages} width="32px" height="32px">
                <use href="../../images/svg/portfolio-svg.svg#icon-code"></use>
              </svg>
            </a>
          </div>
        ))}
    </div>
    <div>
      <h2>React</h2>
      {items
        .filter(item => item.category === "React")
        .map(item => (
          <div>
            <h3>{item.title}</h3>
            <a href={item.linkPage}>
              <svg className={styles.svgImages} width="32px" height="32px">
                <use href="../../images/svg/portfolio-svg.svg#icon-page"></use>
              </svg>
            </a>
            <a href={item.linkCode}>
              <svg className={styles.svgImages} width="32px" height="32px">
                <use href="../../images/svg/portfolio-svg.svg#icon-code"></use>
              </svg>
            </a>
          </div>
        ))}
    </div>
  </div>
);

export default Main;
