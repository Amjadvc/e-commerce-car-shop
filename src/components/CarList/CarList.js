import styles from "./CarList.module.css";
import CarItem from "./CarItem";
import Lodaing from "../Lodaing/Lodaing";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function CarList({ isLoading, errorMessage, result, selectedCategory }) {
  // console.log(result);
  return (
    <div className={styles.carList}>
      <div className={`container ${styles.carListContainer}`}>
        {isLoading && !errorMessage && <Lodaing />}

        {!isLoading && result.length === 0 && selectedCategory !== null && (
          <div className={styles.noDataFound}>
            We're sorry, but there are currently no cars that match the category
            you have chosen.
          </div>
        )}

        {!isLoading &&
          !errorMessage &&
          result.map((item) => <CarItem item={item} key={item.id} />)}

        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
    </div>
  );
}

export default CarList;
