import styles from "./Home.module.css";
import HeaderText from "../../components/HeaderText/HeaderText";
import LandingPage from "../../components/LandingPage/LandingPage";
import PageNav from "../../components/PageNav/PageNav";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import HomeList from "../../components/HomeListComponents/HomeList";
import dataCarItems from "./data/dummyCars.json";
import { HomeVariantsProvider } from "../../context/HomeVariantsContext";
import { useState } from "react";

export default function Home() {
  const [dummyData] = useState(dataCarItems);
  // console.log(dummyData);

  return (
    <div>
      <HomeVariantsProvider>
        <PageNav className={styles.bgColor} />
        <main className={styles.home}>
          <LandingPage />
          <HeaderText className={styles.carSlide}>
            View Our Top Picks
          </HeaderText>
          <Slider />
          <HeaderText className={styles.carList}>Top Categories</HeaderText>
          <HomeList dummyData={dummyData} />
          <Footer />
        </main>
      </HomeVariantsProvider>
    </div>
  );
}
