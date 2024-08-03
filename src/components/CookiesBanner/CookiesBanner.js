import { useEffect, useState } from "react";
import { useCars } from "../../context/CarItemsContext";
import { motion } from "framer-motion";
import styles from "./CookiesBanner.module.css";

const CookiesVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 2,
      type: "spring",
      ease: "easeIn",
      duration: 1,
    },
  },
};

function CookiesBanner() {
  const { acceptCookies, setAcceptCookies } = useCars();
  const [activeWarning, setActiveWarning] = useState(false);

  function handelAccept() {
    setAcceptCookies(true);
  }

  function handelReject() {
    setAcceptCookies(false);
  }

  useEffect(() => {
    if (acceptCookies === false) {
      setActiveWarning(true);
      const timeoutId = setTimeout(() => {
        setActiveWarning(false);
      }, 2500);

      return () => clearTimeout(timeoutId);
    }
  }, [acceptCookies]);

  return (
    <>
      <motion.div
        className={`${styles.cookiesBanner} ${
          acceptCookies === true || acceptCookies === false ? styles.hide : ""
        } `}
        variants={CookiesVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.cookiesContent}>
          <h3>How we use cookies</h3>
          <p>
            This website uses cookies and similar technologies to enhance site
            navigation, analyse site usage, and help in our marketing efforts
          </p>
        </div>
        <div className={styles.CookiesBtns}>
          <button className={styles.acceptBtn} onClick={handelAccept}>
            Accept
          </button>
          <button className={styles.rejectBtn} onClick={handelReject}>
            Reject
          </button>
        </div>
      </motion.div>

      <motion.div
        className={`${styles.warning} ${
          activeWarning === true ? styles.showWarinig : ""
        }`}
        variants={CookiesVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.warningSymbol}>
          <span>&#9888;</span>
        </div>
        <div className={styles.warningContent}>
          <p> Warning the cart data will not be saved..</p>
        </div>
      </motion.div>
    </>
  );
}

export default CookiesBanner;
