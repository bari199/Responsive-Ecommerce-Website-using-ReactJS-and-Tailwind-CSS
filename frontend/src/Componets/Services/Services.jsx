import React from "react";
import { ServicesData } from "../../assets/assets.jsx";

const Services = () => {
  return (
    <div className="mt-14">
      <div className="container">
        {/* Grid layout for each service item */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {ServicesData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center gap-3 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900"
            >
              <div className="text-primary">{data.icon}</div>
              <h3 className="text-lg font-semibold">{data.title}</h3>
              <p className="text-gray-500 text-sm">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
