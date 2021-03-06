import React from 'react';
import Category from './Category/Category';
import styles from './Main.module.css';

const Main = () => (
  <div>
    <div className={styles.wrapper}>
      <h2 className={styles.titleCategory}>HTML/CSS</h2>
      <Category category="HTML/CSS" />
    </div>
    <div className={styles.wrapper}>
      <h2 className={styles.titleCategory}>JS</h2>
      <Category category="JS" />
    </div>
    <div className={styles.wrapper}>
      <h2 className={styles.titleCategory}>React</h2>
      <Category category="React" />
    </div>
  </div>
);

export default Main;
