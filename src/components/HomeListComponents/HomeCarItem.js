import styles from "./HomeCarItem.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useHomeVariants } from "../../context/HomeVariantsContext";
import Button from "../Button/Button";

export default function CarItem({ item }) {
  const { mainImge, carName, description } = item;

  const { homeVariant } = useHomeVariants();

  return (
    <motion.div
      className={styles.carItem}
      variants={homeVariant}
      initial="hidden"
      whileInView="visible"
    >
      <div className={styles.imgContainer}>
        <img className={styles.imgH} src={mainImge} alt={`car ${mainImge}`} />
        <span className={styles.imgInnerText}>{item.carName}</span>
      </div>
      <div className={styles.discriptionCard}>
        {/* <h3>{carName}</h3> */}
        <div className={styles.text}>
          <p>{description.partOne}</p>

          <p>{description.partTwo}</p>

          <p>{description.partThree}</p>
        </div>
      </div>

      <div className={styles.buttons}>
        <Link to={"/catalogue"}>
          <Button>Explore More</Button>
        </Link>
      </div>
    </motion.div>
  );
}
