import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import ContactUs from "./pages/ContactUs";
import Help from "./pages/Help";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Details from "./pages/Details";
import PageNotFound from "./pages/PageNotFound";

//import main imges

import carListOne from "./assets/images/car-list-one.png";
import carListTwo from "./assets/images/car-list-two.png";
import carListThree from "./assets/images/car-list-three.png";
import carListFour from "./assets/images/car-list-four.png";

//import slider details Imge
import imgeTwo from "./assets/images/details-Door.png";
import imgeThree from "./assets/images/details-motor.png";
import imgeFour from "./assets/images/details-Streeing.png";

//
import volvoImg from "./assets/images/volvo.png";
import hondaImg from "./assets/images/honda.png";
import bmwImg from "./assets/images/bmw.png";
import porscheImg from "./assets/images/porche.png";

function App() {
  const cardata = [
    {
      id: 1,
      carName: "AUDI",
      seator: 6,
      transmission: "Manual",
      speed: 7,
      price: 800,
      rating: 4.9,
      description:
        "The culmimination of comfort,luxury,and powerrul living is embodied in the First-Ever BMWX7 -the biggest BMW ever built.",
      colors: ["blue", "white", "black"],
      mainImge: carListOne,
      slderImge: [porscheImg, imgeTwo, imgeThree, imgeFour],
      code: "#816537",
      engineCopacity: 12000,
    },
    {
      id: 2,
      carName: "Honda",
      seator: 2,
      transmission: "Manual",
      speed: 4,
      price: 300,
      rating: 3.5,
      description:
        "The culmimination of comfort,luxury,and powerrul living is embodied in the First-Ever BMWX7 -the biggest BMW ever built.",
      colors: ["red", "white", "black"],
      mainImge: carListTwo,
      slderImge: [hondaImg, imgeTwo, imgeThree, imgeFour],
      code: "#816537",
      engineCopacity: 7000,
    },
    {
      id: 3,
      carName: "VOLVO",
      seator: 3,
      transmission: "Manual",
      speed: 5,
      price: 100,
      rating: 2.3,
      description:
        "The culmimination of comfort,luxury,and powerrul living is embodied in the First-Ever BMWX7 -the biggest BMW ever built.",
      colors: ["gray", "white", "black"],
      mainImge: carListThree,
      slderImge: [volvoImg, imgeTwo, imgeThree, imgeFour],
      code: "#816537",
      engineCopacity: 9000,
    },
    {
      id: 4,
      carName: "BMW",
      seator: 4,
      transmission: "Manual",
      speed: 5,
      price: 200,
      rating: 1,
      description:
        "The culmimination of comfort,luxury,and powerrul living is embodied in the First-Ever BMWX7 -the biggest BMW ever built.",
      colors: ["green", "white", "black"],
      mainImge: carListFour,
      slderImge: [bmwImg, imgeTwo, imgeThree, imgeFour],
      code: "#816537",
      engineCopacity: 8000,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage cardata={cardata} />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="help" element={<Help />} />
        <Route path="cart" element={<Cart cardata={cardata} />} />
        <Route path="register" element={<Register />} />
        <Route path="details/:userId" element={<Details cardata={cardata} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
