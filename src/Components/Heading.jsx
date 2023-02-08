import { Fragment } from "react";
import { useState } from "react";

import styles from "./heading.module.css";
const Heading = function (props) {
  const [loginShow, setIsLogin] = useState(true);
  function handleClick() {
    if (loginShow === true) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }
  return (
    <Fragment>
      <h1 className={styles.title}>RESTAURANT</h1>

      <div>
        <nav>
          <ul className={styles.navItems}>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="Special">
              <li>Special</li>
            </a>
            <a href="About">
              <li>About</li>
            </a>
            <a href="Community">
              <li>Community</li>
            </a>
            <li>Cart</li>
            {loginShow === true ? (
              <li>
                <button onClick={handleClick} className={styles.buttonStyle}>
                  Login
                </button>
              </li>
            ) : (
              <li>
                <button onClick={handleClick} className={styles.buttonStyle}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};
export default Heading;
