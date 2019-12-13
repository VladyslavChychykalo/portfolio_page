import React, { Component, createRef } from 'react';
import DropDownItem from './DropDownItem/DropDownItem';
import { CSSTransition } from 'react-transition-group';
import styles from './DropDownMenu.module.css';
import slideTransition from '../../transitions/slide.module.css';

export default class Menu extends Component {
  backdropRef = createRef();

  state = {
    isOpen: false,
    color: 'white',
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
    window.removeEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = e => {
    if (window.scrollY > 200) {
      this.setState({ color: 'black' });
    } else {
      this.setState({ color: 'white' });
    }
  };

  handleKeyPress = e => {
    if (e.code !== `Escape`) return;

    this.setState({
      isOpen: false,
    });
  };

  // handleBackdropClick = e => {
  //   const { current } = this.backdropRef;
  //   return current;
  // };

  toggleDropdown = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    // const { current } = this.backdropRef;

    return (
      <div className={styles.backdrop}>
        <div
          className={styles.container}
          // ref={this.backdropRef}
          // onClick={this.handleBackdropClick}
        >
          <button
            style={{ color: this.state.color }}
            type="button"
            className={styles.button}
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
            <div className={styles.dropdown}>
              <ul className={styles.list}>
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
      </div>
    );
  }
}

// window.addEventListener('scroll', function() {
//   document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
// });

// const [navBackground, setNavBackground] = useState(false)
// const navRef = useRef()
// navRef.current = navBackground
// useEffect(() => {
//   const handleScroll = () => {
//     const show = window.scrollY > 670
//     if (navRef.current !== show) {
//       setNavBackground(show)
//     }
//   }
//   document.addEventListener('scroll', handleScroll)
//   return () => {
//     document.removeEventListener('scroll', handleScroll)
//   }
// }, [])

//then
