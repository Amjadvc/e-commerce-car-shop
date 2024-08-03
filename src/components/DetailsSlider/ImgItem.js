import styles from "./ImgItem.module.css";
function ImgItem({ img, index, handelIndex, sliderIndex }) {
  return (
    <div
      className={`${styles.imgItem} ${index === sliderIndex && styles.active} `}
      onClick={() => handelIndex(index)}
    >
      <img src={img} alt="img " className={`${styles.innerImge} `} />
    </div>
  );
}

export default ImgItem;
