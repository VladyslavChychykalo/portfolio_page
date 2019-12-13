import React, { Component } from 'react';
import DropDownItem from './DropDownItem/DropDownItem';
import { CSSTransition } from 'react-transition-group';
import css from './DropDownMenu.module.css';
import slideTransition from '../../transitions/slide.module.css';

export default class Menu extends Component {
  state = {
    isOpen: false,
  };

  toggleDropdown = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className={css.container}>
        <button
          type="button"
          className={css.button}
          onClick={this.toggleDropdown}
        >
          &#9776;
        </button>

        <CSSTransition
          in={isOpen}
          timeout={200}
          classNames={slideTransition}
          unmountOnExit
        >
          <div className={css.dropdown}>
            <ul className={css.list}>
              <li>
                <h4>HTML/CSS</h4>
                <DropDownItem category="HTML/CSS" />
              </li>
              <li>
                <h4>JS</h4>
                <DropDownItem category="JS" />
              </li>
              <li>
                <h4>React</h4>
                <DropDownItem category="React" />
              </li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
  }
}
