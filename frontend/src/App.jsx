import React from "react";
import Navbar from "./Componets/Navbar/Navbar";
import Hero from "./Componets/Hero/Hero";
import Category from "./Componets/Category/Category";
import Category2 from "./Componets/Category/Category2";
import Services from "./Componets/Services/Services";
import Banner from "./Componets/Banner/Banner";
import smartwatch from "./assets/category/smartwatch2.png";
import Blog from "./Componets/Blog/Blog";
import headphone from "./assets/hero/headphone.png";
import Products from "./Componets/Products/Products";
import Partners from "./Componets/Partners/Partners.jsx";
import Footer from "./Componets/Footer/Footer";

export const BannerData = [
  {
    discount: "Sale 70%",
    title: "Fine Smile",
    Date: "10 Jan to 28 Jan",
    Image: headphone,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet.",
    bgColor: "#f42c37",
  },
];

export const BannerData2 = [
  {
    discount: "30% OFF",
    title: "Happy Hours",
    Date: "14 Jan to 28 Jan",
    Image: smartwatch,
    title2: "Smart Solo",
    title3: "Winter Sale",
    title4:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet.",
    bgColor: "#2dcc6f",
  },
];

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData[0]} />
      <Products />
      <Banner data={BannerData2[0]} />
      <Blog />
      <Partners />
      <Footer />
      <Popup />
    </div>
  );
};

export default App;
