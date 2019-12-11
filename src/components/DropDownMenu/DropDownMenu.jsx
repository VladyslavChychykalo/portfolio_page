import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import css from "./DropDownMenu.module.css";
import slideTransition from "../../transitions/slide.module.css";

export default class Menu extends Component {
  state = {
    isOpen: false
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
                HTML/CSS
                <ul>
                  <li>
                    <a href="https://vladyslavchychykalo.github.io/EV-website-project/build/home-page.html">
                      EV-HUB
                    </a>
                  </li>
                  <li>
                    <a href="https://vladyslavchychykalo.github.io/goit-fe-course/module_11/build/">
                      Gulp and Svg
                    </a>
                  </li>
                  <li>
                    <a href="https://vladyslavchychykalo.github.io/goit-fe-course/module_09/">
                      Bootstrap Adaptive layout
                    </a>
                  </li>
                  <li>
                    <a href="https://vladyslavchychykalo.github.io/goit-fe-course/module_07/">
                      Inputs and validation
                    </a>
                  </li>
                  <li>
                    <a href="https://vladyslavchychykalo.github.io/goit-fe-course/module_05/">
                      Online shop
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                JS
                <ul>
                  <li>
                    <a href="https://vladyslavchychykalo.github.io/goit-fe-course--JavaScript/module_js_08/">
                      Image Gallery
                    </a>
                  </li>
                  <li>
                    <a href="https://vladyslavchychykalo.github.io/goit-fe-course--JavaScript/module_js_09/">
                      Stopwatch
                    </a>
                  </li>
                  <li>
                    <a href="https://vladyslavchychykalo.github.io/goit-fe-course--JavaScript/module_js_11/">
                      Filter
                    </a>
                  </li>
                  <li>
                    <a href="https://vladyslavchychykalo.github.io/filmoteka/build/">
                      Filmoteka
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                React
                <ul>
                  <li>
                    <a href="">React Page</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
  }
}
