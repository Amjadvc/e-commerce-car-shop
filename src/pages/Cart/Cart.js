import styles from "./Cart.module.css";
import PageNav from "../../components/PageNav/PageNav";
import cartBg from "../../assets/svg/cart-bg.svg";
import CartItem from "../../components/CartItem/CartItem";
import PopupNotificationDelete from "../../components/Popup/PopupNotification/PopupNotificationDelete";
import PageHeader from "../../components/PageHeader/PageHeader";
import PopupDeleteWrapper from "../../components/Popup/PopupDelete/PopupDeleteWrapper";
import { motion } from "framer-motion";
import { useCars } from "../../context/CarItemsContext";
import { useRef } from "react";
import { PopupProvider } from "../../context/PopupContext";

const cartEmptyVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeIn",
      delay: 1,
    },
  },
};

function Cart() {
  const { cartItem } = useCars();
  const snackbarRef = useRef(null);

  function snackShow() {
    snackbarRef.current.showPopupsuccs();
  }

  return (
    <main className={styles.cart}>
      <PageNav className={styles.cartNav} />
      <img src={cartBg} alt="bg" className={styles.bg}></img>

      <div className={`container ${styles.cartContainer}`}>
        <PageHeader> My Cart</PageHeader>

        <section className={styles.tabelContainr}>
          {cartItem.length === 0 && (
            <motion.div
              className={styles.emptyCart}
              variants={cartEmptyVariants}
              initial="hidden"
              animate="visible"
            >
              <p>Your shopping cart is currently empty.</p>
            </motion.div>
          )}

          <PopupProvider>
            {cartItem.length > 0 && (
              <table className={styles.tabel}>
                <thead>
                  <tr>
                    <th>Product </th>
                    <th>Totla Price</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Color </th>
                    <th>Delete </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItem.map((item) => (
                    <CartItem key={crypto.randomUUID()} item={item} />
                  ))}
                </tbody>
              </table>
            )}

            <PopupDeleteWrapper snackShow={snackShow} />
          </PopupProvider>
          <PopupNotificationDelete
            ref={snackbarRef}
            message={"Item deleted successfully!"}
          />
        </section>
      </div>
    </main>
  );
}

export default Cart;
