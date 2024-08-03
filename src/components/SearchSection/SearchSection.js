import styles from "./SearchSection.module.css";
import brandIcon from "../../assets/svg/serachIconCar.svg";
import priceIcon from "../../assets/svg/searchIconPrice.svg";
import fuelTypeIcon from "../../assets/svg/searchIconCapicity.svg";
import modelIcon from "../../assets/svg/searchIconBrand.svg";
import arrowDown from "../../assets/svg/searchIconArrow-down.svg";
import Button from "../Button/Button";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useHomeVariants } from "../../context/HomeVariantsContext";

const options = {
  brandOptions: [
    "All",
    "BMW",
    "Toyota",
    "Honda",
    "Tesla",
    "Chevrolet",
    "Ford",
    "Mercedes-Benz",
    "Jeep",
    "Audi",
    "Kia",
  ],
  modelOptions: [
    "All",
    "Corolla",
    "Mustang",
    "Q5",
    "E-Class",
    "Tahoe",
    "X5",
    "Silverado",
    "Escape",
    "Accord",
    "Highlander",
    "Camaro",
  ],
  fuelTypeOptions: ["All", "Gasoline", "Diesel", "Electric"],
  priceOptions: ["All", "0-30000", "30000-40000", "40000-80000"],
};

export default function SearchSection({ handleChange }) {
  const { homeVariant } = useHomeVariants();
  const [make, setMake] = useState("All");
  const [model, setModel] = useState("All");
  const [fuelType, setFuelType] = useState("All");
  const [price, setPrice] = useState("All");

  //function to create an obj of the states data after submit
  function handleSubmit() {
    handleChange({ make, model, fuelType, price });
  }

  return (
    <div className={styles.search}>
      <div className={`container ${styles.searchContener}`}>
        <motion.div
          className={styles.searchContent}
          variants={homeVariant}
          initial="hidden"
          whileInView="visible"
        >
          <InputSelect
            category={"Brand"}
            icon={brandIcon}
            options={options.brandOptions}
            onChange={(make) => setMake(make)}
          />

          <InputSelect
            category={"Model"}
            icon={modelIcon}
            options={options.modelOptions}
            onChange={(model) => setModel(model)}
          />

          <InputSelect
            category={"Fuel Type"}
            icon={fuelTypeIcon}
            options={options.fuelTypeOptions}
            onChange={(fuelType) => setFuelType(fuelType)}
          />
          <InputSelect
            category={"Price"}
            icon={priceIcon}
            options={options.priceOptions}
            onChange={(price) => setPrice(price)}
          />

          <Button className={styles.customButton} onClickHandler={handleSubmit}>
            Serach
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

function InputSelect({ options, onChange, icon, category }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const inputSelected = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputSelected.current &&
        !inputSelected.current.contains(event.target)
      ) {
        setIsOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenMenu]);

  function handelOpenMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  function handelClick(option) {
    setIsOpenMenu(false);
    onChange(option.target.textContent);
    // console.log(option.target.textContent);
  }

  return (
    <div className={styles.searchItem}>
      <span>{category}</span>
      <div className={styles.searchItemContent}>
        <img src={icon} alt="car-icon" />
        <span>Choose {category}</span>

        <button className={styles.openMenu} onClick={handelOpenMenu}>
          <img src={arrowDown} alt="arrow-dwon" />
        </button>
      </div>

      {isOpenMenu && (
        <ul ref={inputSelected} className={styles.listItem}>
          {options.map((option, index) => (
            <li
              key={index}
              className={styles.option}
              onClick={(event) => handelClick(event)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
