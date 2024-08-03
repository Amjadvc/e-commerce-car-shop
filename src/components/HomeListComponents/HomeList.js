import styles from "./HomeList.module.css";

import HomeCarItem from "./HomeCarItem";

export default function HomeList({ dummyData }) {
  return (
    <div className={styles.carList}>
      <div className={`container ${styles.carListContainer}`}>
        {dummyData.map((item) => (
          <HomeCarItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
