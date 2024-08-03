import styles from "./DetailsContent.module.css";
import DetalisTriangle from "../DetailsSvg/DetalisTriangle";
import StarList from "../Star/StarList";
import detailBg from "../../assets/svg/bg.svg";
import Button from "../Button/Button";
import DetailsHeader from "./DetailsHeader";
import { useRef, useState } from "react";
import ButtonColor from "./ButtonColor";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCars } from "../../context/CarItemsContext";
import PopupNotificationDelete from "../Popup/PopupNotification/PopupNotificationDelete";

function detailsVariants(delay) {
  return {
    hidden: { x: +100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeIn",
        delay,
      },
    },
  };
}

const contentH3Variants = detailsVariants(0.1);
const detailsRatingVariants = detailsVariants(0.2);
const detailsDescriptionVariants = detailsVariants(0.3);
const detailsColorVariants = detailsVariants(0.4);
const quntityPriceVariants = detailsVariants(0.5);
const buttonsVariants = detailsVariants(0.6);

function DetailsContent({ matchedCar }) {
  const {
    colors: colorArray,
    price: carPrice,
    quantity,
    make,
    model,
    engine,
    horsepower,
  } = matchedCar;

  const { addToCart } = useCars();
  const [choosenRating, setChoosenRating] = useState(0);
  const [isActiveColor, setIsActiveColor] = useState(colorArray[0]);
  const [carQuntity, setICarQuntity] = useState(quantity);
  const snackbarRef = useRef(null);
  const newPriec = carPrice * carQuntity;

  function handelActiveColor(color) {
    setIsActiveColor(color);
  }

  function handelDecrease() {
    setICarQuntity((carQuntity) => (carQuntity === 1 ? 1 : (carQuntity -= 1)));
  }

  function handelIncrease() {
    setICarQuntity((carQuntity) => (carQuntity += 1));
  }
  function handleBuy(handelNewItem) {
    addToCart(handelNewItem);
    snackbarRef.current.showPopupsuccs();
  }

  const handelNewItem = {
    ...matchedCar,
    rating: choosenRating,
    price: newPriec,
    choosenColor: isActiveColor,
    quantity: carQuntity,
  };

  return (
    <div className={styles.content}>
      <img src={detailBg} className={styles.bg} alt="backgroundImage" />
      <DetalisTriangle />
      <motion.h3
        variants={contentH3Variants}
        initial="hidden"
        whileInView="visible"
      >
        Details
      </motion.h3>

      <motion.div
        className={styles.detailsRating}
        variants={detailsRatingVariants}
        initial="hidden"
        whileInView="visible"
      >
        <DetailsHeader>Rating And Review</DetailsHeader>
        <StarList setChoosenRating={setChoosenRating} />
      </motion.div>

      <motion.div
        className={styles.detailsDescription}
        variants={detailsDescriptionVariants}
        initial="hidden"
        whileInView="visible"
      >
        <DetailsHeader>Description</DetailsHeader>
        <p>
          {`The culmimination of comfort,
          ${make} ${model}. This vehicle, featuring a ${engine} engine, delivers
          ${horsepower} horsepower for a thrilling drive.`}
        </p>
      </motion.div>

      <motion.div
        className={styles.detailsColor}
        variants={detailsColorVariants}
        initial="hidden"
        whileInView="visible"
      >
        <DetailsHeader>Colors</DetailsHeader>
        <div className={styles.colors}>
          {colorArray.map((itemColor, index) => (
            <ButtonColor
              key={index}
              itemColor={itemColor}
              handelActiveColor={() => handelActiveColor(itemColor)}
              isActiveColor={itemColor === isActiveColor}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className={styles.quntityPrice}
        variants={quntityPriceVariants}
        initial="hidden"
        whileInView="visible"
      >
        <div className={styles.quntity}>
          <button onClick={handelDecrease}>-</button>
          <span>{carQuntity}</span>
          <button onClick={handelIncrease}>+</button>
        </div>
        <div className={styles.price}>
          <p>
            Price: <span>{carPrice * carQuntity}$</span>
          </p>
        </div>
      </motion.div>

      <motion.div
        className={styles.buttons}
        variants={buttonsVariants}
        initial="hidden"
        whileInView="visible"
      >
        <Link to="/cart">
          <Button
            onClickHandler={() => handleBuy(handelNewItem)}
            className={styles.addCart}
          >
            Add To Cart
          </Button>
        </Link>
        <Button
          onClickHandler={() => handleBuy(handelNewItem)}
          className={styles.buyNow}
        >
          Buy Now
        </Button>
      </motion.div>
      <PopupNotificationDelete
        styless={"addedFromHome"}
        ref={snackbarRef}
        message={"Item Added Successfully!"}
      />
    </div>
  );
}

export default DetailsContent;
