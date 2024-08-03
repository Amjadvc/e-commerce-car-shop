import styles from "./RegisterSuccess.module.css";
import seccuessImge from "../../assets/svg/user-success.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const userImgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};
const usercontentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.7,
    },
  },
};

function RegisterSuccess({ dirction, textContent }) {
  return (
    <div className={styles.successContainer}>
      <motion.div
        variants={userImgVariants}
        initial="hidden"
        animate="visible"
        className={styles.successImg}
      >
        <img src={seccuessImge} alt=" user success" />
      </motion.div>

      <motion.div
        variants={usercontentVariants}
        initial="hidden"
        animate="visible"
        className={styles.content}
      >
        <h1>Success!</h1>

        <p>
          <Link to={dirction}>{textContent}</Link>
          <span className={styles.line}></span>
        </p>
      </motion.div>
    </div>
  );
}

export default RegisterSuccess;
