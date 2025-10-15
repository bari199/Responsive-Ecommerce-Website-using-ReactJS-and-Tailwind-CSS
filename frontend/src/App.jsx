import React from "react";
import Navbar from "./Componets/Navbar/Navbar";
import Hero from "./Componets/Hero/Hero";
import Category from "./Componets/Category/Category";
import Category2 from "./Componets/Category/Category2";
import Services from "./Componets/Services/Services";
import Banner from "./Componets/Banner/Banner";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner />
    </div>
  );
};

export default App;
