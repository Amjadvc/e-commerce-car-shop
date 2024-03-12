import Carousel from "react-multi-carousel";
import carOne from "../../assets/images/car-porsche-unsplash.jpg";
import carTwo from "../../assets/images/car-bmw-unsplash.jpg";
import carThree from "../../assets/images/car-mercedes-unsplash.jpg";
import carFour from "../../assets/images/car-audi-unsplash.jpg";
import SliderControls from "./SliderControls";
import SliderItem from "./SliderItem";
import styles from "./SliderCarousel.module.css";

export default function SliderCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    large: {
      breakpoint: { max: 3000, min: 992 },
      items: 4,
    },
    medum: {
      breakpoint: { max: 992, min: 769 },
      items: 3,
    },
    medumSmall: {
      breakpoint: { max: 769, min: 600 },
      items: 3,
    },
    medumSmallMore: {
      breakpoint: { max: 600, min: 480 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };

  const sliderData = [
    {
      id: 1,
      imge: carOne,
      text: "Porsche",
    },
    {
      id: 2,
      imge: carTwo,
      text: "Bmw",
    },
    {
      id: 3,
      imge: carThree,
      text: "Mercedes",
    },
    {
      id: 4,
      imge: carFour,
      text: "Audi",
    },
  ];

  return (
    <div className={styles.customContainer}>
      <Carousel
        responsive={responsive}
        infinite={true}
        arrows={false}
        customButtonGroup={<SliderControls />}
      >
        {sliderData.map((item) => (
          <SliderItem item={item} key={item.id} />
        ))}
      </Carousel>
    </div>
  );
}
