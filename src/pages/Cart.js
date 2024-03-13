import { motion } from "framer-motion";
import styles from "./Cart.module.css";
import PageNav from "../components/PageNav/PageNav";
import cartBg from "../assets/svg/cart-bg.svg";
import CartItem from "../components/CartItem/CartItem";

const cartHeaderVariants = {
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

function Cart({ cardata }) {
  return (
    <main className={styles.cart}>
      <PageNav className={styles.cartNav} />
      <img src={cartBg} alt="bg" className={styles.bg}></img>

      <div className={`container ${styles.cartContainer}`}>
        <motion.div
          className={styles.cartHeader}
          variants={cartHeaderVariants}
          initial="hidden"
          animate="visible"
        >
          My Cart
        </motion.div>

        <section className={styles.tabelContainr}>
          <table className={styles.tabel}>
            <thead>
              <tr>
                <th>Product </th>
                <th>Price </th>
                <th>Color </th>
                <th>Delete </th>
              </tr>
            </thead>
            <tbody>
              {cardata.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}

export default Cart;
