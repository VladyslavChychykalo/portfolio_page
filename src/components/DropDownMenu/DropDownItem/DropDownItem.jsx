import React from 'react';
import items from '../../../storage/portfolio.json';
import styles from './DropDownItem.module.css';

const DropDownItem = ({ category }) => (
  <ul className={styles.item}>
    {items
      .filter(item => item.category === category)
      .map(item => (
        <li key={item.id}>
          <a href={item.linkPage}>{item.title}</a>
        </li>
      ))}
  </ul>
);

export default DropDownItem;
