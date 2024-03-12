import styles from "./HeaderText.module.css";
import { motion } from "framer-motion";

function HeaderText({ children, className, homeVariants }) {
  return (
    <div className={styles.headerText}>
      <motion.div
        className={`container ${styles.headerTextContainer} ${className}`}
        variants={homeVariants}
        initial="hidden"
        whileInView="visible"
      >
        <h3>{children}</h3>
      </motion.div>
    </div>
  );
}

export default HeaderText;
