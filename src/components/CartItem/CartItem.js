import styles from "./CartItem.module.css";
import deleteIcon from "../../assets/images/close_24px.png";
import { motion } from "framer-motion";

const itemTrVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "easeIn",
      delay: 0.2,
    },
  },
};

function CartItem({ item }) {
  const { mainImge, carName, code, engineCopacity, colors, price } = item;
  return (
    <motion.tr
      className={styles.itemTr}
      variants={itemTrVariants}
      initial="hidden"
      whileInView="visible"
    >
      <td datalabel="Product">
        <div className={styles.productContainer}>
          <img src={mainImge} alt={mainImge} className={styles.imgeTabel} />
          <div className={styles.productDetails}>
            <h4 className={styles.carType}>{carName}</h4>
            <p>Code:{code}</p>
            <p>Engine Copacity:{engineCopacity}</p>
          </div>
        </div>
      </td>
      <td datalabel="Price">{price}</td>
      <td datalabel="Color">{colors[0]}</td>
      <td datalabel="Delete">
        <button className={styles.btn}>
          <img src={deleteIcon} alt="delete icon" />
        </button>
      </td>
    </motion.tr>
  );
}

export default CartItem;
