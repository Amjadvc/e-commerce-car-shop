import styles from "./PageNotFound.module.css";
import errorImage from "../../assets/images/Scarecrow.png";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
function PageNotFound() {
  return (
    <main className={styles.notFound}>
      <div className={`container ${styles.notFoundContainer}`}>
        <h1>Oops!</h1>
        <p> 404 PAGE NOT FOUND </p>
        <img src={errorImage} alt="error-screen" />
        <NavLink to="/" className={styles.link}>
          <Button className={styles.buttonBack}>BACK TO HOMEPAGE</Button>
        </NavLink>
      </div>
    </main>
  );
}

export default PageNotFound;
