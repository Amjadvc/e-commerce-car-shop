import HeaderText from "../components/HeaderText/HeaderText";
import LandingPage from "../components/LandingPage/LandingPage";
import PageNav from "../components/PageNav/PageNav";
import SearchSection from "../components/SearchSection/SearchSection";
import Slider from "../components/Slider/Slider";
import styles from "./Home.module.css";
import CarList from "../components/CarList/CarList";
import Footer from "../components/Footer/Footer";
import ArrowToTopBtn from "../components/HomeArrowToTopBtn/ArrowToTopBtn";
const homeVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      duration: 0.5,
      ease: "easeIn",
      delay: 0.4,
    },
  },
};

export default function Home({ cardata }) {
  return (
    <div>
      <PageNav className={styles.bgColor} />
      <main className={styles.home}>
        <LandingPage />
        <SearchSection homeVariants={homeVariants} />
        <HeaderText homeVariants={homeVariants}>Find by Car Type</HeaderText>
        <Slider homeVariants={homeVariants} />
        <HeaderText className={styles.carList} homeVariants={homeVariants}>
          Top Categories
        </HeaderText>
        <CarList cardata={cardata} homeVariants={homeVariants} />
        <ArrowToTopBtn />
        <Footer />
      </main>
    </div>
  );
}
