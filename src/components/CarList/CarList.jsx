import styles from "./CarList.module.css";
import CarItem from "./CarItem";

function CarList({ cardata, homeVariants }) {
  return (
    <div className={styles.carList}>
      <div className={`container ${styles.carListContainer}`}>
        {cardata.map((item) => (
          <CarItem item={item} key={item.id} homeVariants={homeVariants} />
        ))}
      </div>
    </div>
  );
}

export default CarList;
