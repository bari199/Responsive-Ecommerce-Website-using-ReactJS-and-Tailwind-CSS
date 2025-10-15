import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

import { ProductData } from "../../assets/assets.jsx";

const Products = () => {
  return (
    <div>
      <div>
        <div className="container">
          {/* Heading Section  */}
          <Heading
            title="Our Products"
            subtitle={"Check out our latest products"}
          />
          {/* Body Section  */}
          <ProductCard data={ProductData} />
        </div>
      </div>
    </div>
  );
};

export default Products;
