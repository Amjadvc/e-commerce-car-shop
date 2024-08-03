import styles from "./HeaderText.module.css";
import { motion } from "framer-motion";
import { useHomeVariants } from "../../context/HomeVariantsContext";

function HeaderText({ children, className }) {
  const { homeVariant } = useHomeVariants();
  return (
    <div className={`${styles.headerText} ${className}`}>
      <motion.div
        className={`container ${styles.headerTextContainer}`}
        variants={homeVariant}
        initial="hidden"
        whileInView="visible"
      >
        <h3>{children}</h3>
      </motion.div>
    </div>
  );
}

export default HeaderText;
