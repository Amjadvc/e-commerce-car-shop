import styles from "./CartItem.module.css";
import deleteIcon from "../../assets/images/close_24px.png";
import { usePopup } from "../../context/PopupContext";

function CartItem({ item }) {
  const { setShwoPopupD, setItemToDelete } = usePopup();
  const {
    mainImg,
    make,
    year,
    model,
    price,
    choosenColor,
    colors,
    quantity,
    rating,
  } = item;

  function handelDelete(item) {
    setShwoPopupD((prev) => !prev);
    setItemToDelete(item);
  }

  return (
    <tr className={`${styles.itemTr} `}>
      <td datalabel="Product">
        <div className={styles.productContainer}>
          <div className={styles.imgContaienr}>
            <img src={mainImg} alt={mainImg} className={styles.imgeTabel} />
          </div>
          <div className={styles.productDetails}>
            <h4 className={styles.carType}>{make}</h4>
            <p>Model: {model}</p>
            <p>Year: {year}</p>
            <p>rating: {rating ? rating : "∅"}</p>
          </div>
        </div>
      </td>
      <td datalabel="Totla Price">{price}</td>
      <td datalabel="Price">{price / quantity}</td>
      <td datalabel="Quantity">{quantity}</td>
      <td datalabel="Color">{choosenColor ? choosenColor : colors[0]}</td>
      <td datalabel="Delete">
        <button className={styles.btn} onClick={() => handelDelete(item)}>
          <img src={deleteIcon} alt="delete icon" />
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
