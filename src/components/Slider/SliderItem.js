import { useState } from "react";
import styles from "./SliderItem.module.css";

function SliderItem({ item }) {
  const [isActiveItem, setIsActiveItem] = useState(false);
  return (
    <div
      className={styles.carItem}
      onMouseEnter={() => setIsActiveItem(true)}
      onMouseLeave={() => setIsActiveItem(false)}
    >
      <img src={item.imge} alt="car-slider" />
      <div
        className={`${styles.carItemOverlay} ${
          isActiveItem ? styles.activeOverlay : ""
        }`}
      ></div>
      <span
        className={`${styles.carItemInner}  ${
          isActiveItem ? styles.activeSpan : ""
        }`}
      >
        {item.text}
      </span>
    </div>
  );
}

export default SliderItem;
