import styles from "./SliderControls.module.css";
import ArrowLeft from "../ArrowsIcon/ArrowLeft/ArrowLeft";
import ArrowRight from "../ArrowsIcon/ArrowRight/ArrowRight";
function SliderControls({ next, previous }) {
  return (
    <div className={styles.arrowsContainer}>
      <SliderButton
        onClick={() => previous()}
        className={`${styles.arrow} ${styles.left}`}
      >
        <ArrowLeft />
      </SliderButton>
      <SliderButton
        onClick={() => next()}
        className={`${styles.arrow} ${styles.right}`}
      >
        <ArrowRight />
      </SliderButton>
    </div>
  );
}

function SliderButton({ onClick, children, className }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default SliderControls;
