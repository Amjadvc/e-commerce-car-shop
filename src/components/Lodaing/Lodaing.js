import styles from "./Lodaing.module.css";
function Lodaing() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Lodaing;
