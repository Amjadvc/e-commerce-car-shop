import PageNav from "../../components/PageNav/PageNav";
import styles from "./Catalogue.module.css";
import trakSvg from "../../assets/svg/detailsTrack.svg";
import SearchSection from "../../components/SearchSection/SearchSection";
import CarList from "../../components/CarList/CarList";
import ArrowToTopBtn from "../../components/HomeArrowToTopBtn/ArrowToTopBtn";
import Hero from "./Hero";
import { motion } from "framer-motion";
import { HomeVariantsProvider } from "../../context/HomeVariantsContext";
import useCarData from "../../hooks/useCarData";
import { useEffect } from "react";

const trackVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      duration: 0.3,
      ease: "easeIn",
      delay: 0.1,
    },
  },
};

function Catalogue() {
  const { isLoading, errorMessage, selectedCategory, handleChange, result } =
    useCarData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PageNav className={` ${styles.bgColor}`} />
      <main className={styles.catalogue}>
        <div className={`container ${styles.catalogueContainr}`}>
          <Track />
          <HomeVariantsProvider>
            <Hero />
            <SearchSection handleChange={handleChange} />

            <CarList
              result={result}
              isLoading={isLoading}
              selectedCategory={selectedCategory}
              errorMessage={errorMessage}
            />
          </HomeVariantsProvider>
          <ArrowToTopBtn />
        </div>
      </main>
    </div>
  );
}

export default Catalogue;

function Track() {
  return (
    <div className={styles.trakContainer}>
      <motion.p
        variants={trackVariants}
        initial="hidden"
        animate="visible"
        className={`${styles.trak} `}
      >
        Type
        <span>
          <img src={trakSvg} alt="track" />
        </span>
        Car
        <span>
          <img src={trakSvg} alt="track" />
        </span>
        <strong>Catalogue</strong>
      </motion.p>
    </div>
  );
}
