import { motion } from "framer-motion";
import styles from "./PageHeader.module.css";

const headerVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      duration: 0.3,
      ease: "easeIn",
      delay: 0.4,
    },
  },
};

function PageHeader({ children }) {
  return (
    <motion.div
      className={styles.pageHeader}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

export default PageHeader;
