import styles from "./Slider.module.css";
import SliderCarousel from "./SliderCarousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

export default function Slider({ homeVariants }) {
  return (
    <div className={styles.slider}>
      <motion.div
        className={`container ${styles.sliderContainer}`}
        variants={homeVariants}
        initial="hidden"
        whileInView="visible"
      >
        <SliderCarousel />
        <div className={styles.sliderBg}></div>
      </motion.div>
    </div>
  );
}
