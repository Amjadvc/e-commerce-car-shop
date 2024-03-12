import styles from "./CarItem.module.css";
import seatorImg from "../../assets/svg/carListIconOne.svg";
import manualImg from "../../assets/svg/carListIconTwo.svg";
import speedImg from "../../assets/svg/carListIconThree.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CarItem({ item, homeVariants }) {
  const { mainImge, carName, seator, transmission, speed, price } = item;
  return (
    <motion.div
      className={styles.carItem}
      variants={homeVariants}
      initial="hidden"
      whileInView="visible"
    >
      <img src={mainImge} alt={`car ${mainImge}`} />
      <div className={styles.discriptionCard}>
        <h3>{carName}</h3>
        <div className={styles.properties}>
          <div className={styles.inner}>
            <img src={seatorImg} alt="seator svg" />
            <p>
              <span>{seator}</span> Seator
            </p>
          </div>
          <div className={styles.inner}>
            <img src={manualImg} alt="seator svg" />
            <p>{transmission}</p>
          </div>
          <div className={styles.inner}>
            <img src={speedImg} alt="seator svg" />
            <p>{speed}KM/1-lt</p>
          </div>
        </div>
        <p>Starting at ${price}/Day</p>
      </div>
      <div className={styles.buttons}>
        <Link to={`details/${item.id}`}>
          <Button className={styles.buttonDetails}>Details &gt;</Button>
        </Link>
        <Button>Buy Now</Button>
      </div>
    </motion.div>
  );
}
