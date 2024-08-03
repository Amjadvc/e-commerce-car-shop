import styles from "./Details.module.css";
import PageNav from "../../components/PageNav/PageNav";
import DetailsSlider from "../../components/DetailsSlider/DetailsSlider";
import DetailsContent from "../../components/DetailsContent/DetailsContent";
import { useParams } from "react-router-dom";
import useCarData from "../../hooks/useCarData";

function Details() {
  const { result } = useCarData();
  const { userId } = useParams();

  const matchedCar = result.filter(
    (carItem) => carItem.id === Number(userId)
  )[0];
  // console.log(matchedCar);

  if (!matchedCar) {
    return <div></div>;
  }

  return (
    <>
      <PageNav className={` ${styles.bgColor}`} />
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
