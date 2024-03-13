import styles from "./Details.module.css";
import PageNav from "../components/PageNav/PageNav";
import DetailsSlider from "../components/DetailsSlider/DetailsSlider";
import DetailsContent from "../components/DetailsContent/DetailsContent";

import { useParams } from "react-router-dom";

function Details({ cardata }) {
  const { userId } = useParams();
  //get matched car from car data
  const matchedCar = cardata.filter(
    (carItem) => carItem.id === Number(userId)
  )[0];

  return (
    <>
      <PageNav className={styles.bgColor} />
      <main className={styles.details}>
        <div className={`container ${styles.detailsContainer}`}>
          <DetailsSlider matchedCar={matchedCar} />
          <DetailsContent matchedCar={matchedCar} />
        </div>
      </main>
    </>
  );
}

export default Details;
