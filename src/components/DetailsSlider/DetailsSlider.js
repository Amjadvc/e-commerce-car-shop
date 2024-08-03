import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./DetailsSlider.module.css";
import trakSvg from "../../assets/svg/detailsTrack.svg";
import arrowLeft from "../../assets/svg/details-arrow-left.svg";
import arrowRight from "../../assets/svg/details-arrow-right.svg";
import ImgItem from "./ImgItem";

const imgeSliderContentVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      duration: 0.5,
      ease: "easeIn",
      delay: 0.2,
    },
  },
};
const mainImageVariants = {
  hidden: { x: "-80vh", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      duration: 0.3,
      ease: "easeIn",
      delay: 0.2,
    },
  },
};

function DetailsSlider({ matchedCar }) {
  const { make, engine, slderImge, model } = matchedCar;
  const [sliderIndex, setSliderIndex] = useState(0);

  function handelIndex(i) {
    setSliderIndex(i);
  }

  function handelDecreaseSlider() {
    setSliderIndex((sliderIndex) =>
      sliderIndex > 0 ? (sliderIndex -= 1) : (sliderIndex = 3)
    );
  }
  function handelIncreaseSlider() {
    setSliderIndex((sliderIndex) =>
      sliderIndex < 3 ? (sliderIndex += 1) : (sliderIndex = 0)
    );
  }

  return (
    <div className={styles.imgeSliderContainer}>
      <motion.div
        className={styles.imgeSliderContent}
        variants={imgeSliderContentVariants}
        initial="hidden"
        animate="visible"
      >
        <p className={`${styles.trak} `}>
          Car
          <span>
            <img src={trakSvg} alt="track" />
          </span>
          catalogue
          <span>
            <img src={trakSvg} alt="track" />
          </span>
          <strong>Details</strong>
        </p>
        <h3 className={`${styles.carName} `}>
          {make === "Mercedes-Benz" ? "Mercedes" : make} - {model}
        </h3>
        {/* <p className={styles.capacity}>{engineCopacity} cc</p> */}
        <p className={styles.capacity}>{engine} cc</p>
      </motion.div>
      <div className={styles.imgeSliderInner}>
        <div className={styles.activeImge}>
          <motion.img
            className={`${styles.mainImage}`}
            src={slderImge[sliderIndex]}
            alt="active imge"
            variants={mainImageVariants}
            initial="hidden"
            animate="visible"
          />
        </div>
        <div className={styles.slider}>
          <button onClick={handelDecreaseSlider}>
            <img src={arrowLeft} alt="arrowLeft" />
          </button>
          {slderImge.map((img, index) => (
            <ImgItem
              img={img}
              index={index}
              handelIndex={handelIndex}
              sliderIndex={sliderIndex}
              key={index}
            />
          ))}
          <button onClick={handelIncreaseSlider}>
            <img src={arrowRight} alt="arrowRight" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsSlider;
