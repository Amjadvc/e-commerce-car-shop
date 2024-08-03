import styles from "./PopupDelete.module.css";

function PopupDelete({ setShwoPopupD, onYesClick, ItemToDelete, snackShow }) {
  const { quantity, make, choosenColor, colors } = ItemToDelete;

  function handelClosePopup() {
    setShwoPopupD((s) => !s);
  }

  function handelClickYes() {
    setShwoPopupD((s) => !s);
    onYesClick();
    snackShow();
  }

  return (
    <div className={styles.deletePopup}>
      <button className={styles.close} onClick={handelClosePopup}>
        x
      </button>
      <p className={styles.headerText}>
        Are you sure you want to remove <br />
        <strong
          style={{ backgroundColor: choosenColor ? choosenColor : colors[0] }}
        >
          <span
            style={{
              color: choosenColor === "white" ? "black" : "",
            }}
          >
            {quantity}
          </span>
        </strong>
        {"\n"}
        <span>{choosenColor ? choosenColor : colors[0].toLowerCase()}</span>
        {"\n"}
        {make} {"\n"}
        {quantity > 1 ? "cars" : "car"} <br />
        {"\n"}from your cart?
      </p>
      <div className={styles.btns}>
        <button onClick={handelClickYes}>Yes</button>
        <button onClick={handelClosePopup}>No</button>
      </div>
    </div>
  );
}

export default PopupDelete;
