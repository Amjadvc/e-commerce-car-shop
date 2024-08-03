import styles from "./PageNav.module.css";
import Logo from "../Logo/Logo";
import myCart from "../../assets/svg/mycart.svg";
import ButtonNavBar from "../NavBar/ButtonNavBar";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useCars } from "../../context/CarItemsContext";

const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

function PageNav({ className }) {
  const [isActive, setIsActive] = useState(false);
  const { quantity } = useCars();

  function handelIsActive() {
    setIsActive(!isActive);
  }

  return (
    <nav className={`${styles.nav} ${className}`}>
      <motion.div
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`container ${styles.navRaber}`}
      >
        <Logo />

        <ButtonNavBar handelIsActive={handelIsActive} isActive={isActive} />

        <ul className={`${styles.listOne} ${isActive ? styles.barActive : ""}`}>
          <li>
            <NavLink to={"/"} className={`${styles.link}`}>
              Home
            </NavLink>
            <span className={styles.line}></span>
          </li>

          <li>
            <NavLink to={"/catalogue"} className={styles.link}>
              Catalogue
            </NavLink>
            <span className={styles.line}></span>
          </li>
          <li>
            <NavLink to={"/contact-us"} className={styles.link}>
              Contact Us
            </NavLink>
            <span className={styles.line}></span>
          </li>
          <li>
            <NavLink to={"/help"} className={styles.link}>
              Help
            </NavLink>
            <span className={styles.line}></span>
          </li>
        </ul>

        <ul className={`${styles.listTwo} ${isActive ? styles.barActive : ""}`}>
          <li>
            <NavLink to={"/cart"} className={styles.cart}>
              <div className={styles.imeContainer}>
                <img className={styles.myCart} src={myCart} alt="cart" />
              </div>

              <div className={styles.cartCount}>{quantity}</div>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/register"}
              className={`${styles.link} ${styles.register}`}
            >
              Register
            </NavLink>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}

export default PageNav;
