import { useState, useEffect, useMemo } from "react";

const BASE_URL = "https://freetestapi.com/api/v1";

const carImages = {
  Honda: "/images/honda.png",
  Toyota: "/images/toyota.png",
  Tesla: "/images/tesla.png",
  Ford: "/images/ford.png",
  Chevrolet: "/images/chevrolet.png",
  Nissan: "/images/nissan.png",
  BMW: "/images/bmw.png",
  Audi: "/images/audi.png",
  Subaru: "/images/subaru.png",
  Lexus: "/images/lexus.png",
  Jeep: "/images/jeep.png",
  Kia: "/images/kia.png",
  "Mercedes-Benz": "/images/mercedes-benz.png",
};

function useCarData() {
  const [carsApi, setCarsApi] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchCars() {
      try {
        setIsLoading(true);

        let url = `${BASE_URL}/cars`;

        if (selectedCategory && selectedCategory.model !== "All") {
          url = `${BASE_URL}/cars?search=${selectedCategory.model}`;
        }

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Something went wrong with fetching cars");
        }

        const data = await res.json();

        setCarsApi(data);

        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      } catch (err) {
        console.log(err);
        setErrorMessage(err.message);
        setIsLoading(false);
      }
    }

    fetchCars();
  }, [selectedCategory]);

  const handleChange = (obj) => {
    setSelectedCategory(obj);
  };

  const filteredData = useMemo(() => {
    if (!selectedCategory) return carsApi;

    const { make, price, fuelType } = selectedCategory;
    let minPrice = 0,
      maxPrice = Infinity;

    if (price !== "All") {
      const priceArray = price.split("-").map(Number);
      minPrice = Math.min(...priceArray);
      maxPrice = Math.max(...priceArray);
    }

    return carsApi.filter(
      ({ make: carMake, price: carPrice, fuelType: carFuelType }) => {
        return (
          (make === "All" || carMake === make) &&
          (price === "All" || (carPrice > minPrice && carPrice <= maxPrice)) &&
          (fuelType === "All" || carFuelType === fuelType)
        );
      }
    );
  }, [carsApi, selectedCategory]);

  const result = useMemo(() => {
    return filteredData.map((car) => {
      let mainColor = car.color.toLowerCase();

      if (mainColor === "black") {
        mainColor = "darkcyan";
      } else if (mainColor === "white") {
        mainColor = "tomato";
      }

      const mainImg = carImages[car.make];
      return {
        ...car,
        quantity: 1,
        rating: 0,
        mainImg,
        colors: [mainColor, "white", "black"],
        choosenColor: mainColor,
        slderImge: [
          mainImg,
          "/images/details-Door.png",
          "/images/details-motor.png",
          "/images/details-Streeing.png",
        ],
      };
    });
  }, [filteredData]);

  return {
    isLoading,
    errorMessage,
    selectedCategory,
    handleChange,
    result,
  };
}

export default useCarData;
