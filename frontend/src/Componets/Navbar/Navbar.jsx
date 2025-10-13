import React from "react";
const MenuLinks = [
  {
    id: 1,
  },
];

const Navbar = () => {
  return (
    <div
      className="bg-white dark:bg-gray-900 dark:text-white
    duration-200 relative z-40"
    >
      <div className="py-4">
        <div className="container">
          <div>
            <a
              href="#"
              className=" text-primary font-semibold tracking-widest text-2xl uppercase
            sm:text-3xl"
            >
              Eshop
            </a>
            <div>
              <ul>
                {MenuLinks.map((data, index) => (
                  <li>
                    <a href=""></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
