import PopupNotificationDelete from "../../components/Popup/PopupNotification/PopupNotificationDelete";
import { useRef } from "react";
import { useCars } from "../../context/CarItemsContext";
import styles from "./Catalogue.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function createVariants(delay) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
}

const pVariants = createVariants(0.7);
const hVariants = createVariants(0.9);
const btnOVariants = createVariants(1.1);
const btnTVariants = createVariants(1.3);
const imgVariants = createVariants(1.5);

const matchedItem = {
  choosenColor: "tomato",
  color: "White",
  colors: ["tomato", "white", "black"],
  engine: "1.5L 4-cylinder",
  horsepower: 158,
  id: 2,
  image: "https://fakeimg.pl/500x500/ffffff",
  mainImg: "/images/honda.png",
  make: "Honda",
  model: "Civic",
  price: 22000,
  quantity: 1,
  rating: 0,
  slderImge: [
    ("/images/honda.png",
    "/images/details-Door.png",
    "/images/details-motor.png",
    "/images/details-Streeing.png"),
  ],
  year: 2021,
};

export default function Hero() {
  const { addToCart } = useCars();
  const snackbarRef = useRef(null);

  function handelBuyNow(item) {
    addToCart(item);
    snackbarRef.current.showPopupsuccs();
  }
  return (
    <div className={styles.hero}>
      <div className={styles.header}>
        <motion.p variants={pVariants} initial="hidden" animate="visible">
          Meet your new car
        </motion.p>
        <motion.h2 variants={hVariants} initial="hidden" animate="visible">
          Honda Civic Type R
        </motion.h2>
      </div>
      <div className={styles.btns}>
        <Link to={`details/${matchedItem?.id}`}>
          <motion.button
            variants={btnOVariants}
            initial="hidden"
            animate="visible"
            className={styles.detailsBtn}
          >
            Details
          </motion.button>
        </Link>
        <motion.button
          variants={btnTVariants}
          initial="hidden"
          animate="visible"
          className={styles.buyNowBtn}
          onClick={() => handelBuyNow(matchedItem)}
        >
          Buy Now
        </motion.button>
      </div>
      <div className={styles.heroImg}>
        <motion.div
          variants={imgVariants}
          initial="hidden"
          animate="visible"
          className={styles.innerHeroImg}
        >
          <img src="/images/honda.png" alt="hero imge" />
        </motion.div>
      </div>

      <PopupNotificationDelete
        styless={"addedFromHome"}
        ref={snackbarRef}
        message={"Item Added Successfully!"}
      />
    </div>
  );
}
