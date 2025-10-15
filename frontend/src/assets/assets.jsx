import Image1 from "../assets/hero/headphone.png";
import Image2 from "../assets/category/vr.png";
import Image3 from "../assets/category/macbook.png";
import { FaCarSide } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";

import Img1 from "../assets/product/p-1.jpg";
import Img2 from "../assets/product/p-2.jpg";
import Img3 from "../assets/product/p-3.jpg";
import Img4 from "../assets/product/p-4.jpg";
import Img5 from "../assets/product/p-5.jpg";
import Img6 from "../assets/product/p-6.jpg";
import Img7 from "../assets/product/p-7.jpg";
import Img8 from "../assets/product/p-8.jpg";

export const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shope",
    link: "/shope",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/blog",
  },
];

export const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    links: "/#",
  },
  {
    id: 1,
    name: "Best Selling",
    links: "/#",
  },
  {
    id: 1,
    name: "Top Rated",
    links: "/#",
  },
];

export const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, asperiores nam voluptatum, laborum provident saepe ea repudiandae quos voluptate, quidem facilis sequi? Suscipit, dolor explicabo eligendi natus nihil eum eaque.",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, asperiores nam voluptatum, laborum provident saepe ea repudiandae quos voluptate, quidem facilis sequi? Suscipit, dolor explicabo eligendi natus nihil eum eaque.",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "Laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, asperiores nam voluptatum, laborum provident saepe ea repudiandae quos voluptate, quidem facilis sequi? Suscipit, dolor explicabo eligendi natus nihil eum eaque.",
  },
];

export const ServicesData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free shipping On All US Order",
  },
  {
    id: 2,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Money",
    description: "30 days Money Back Guarantee",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "All Payment are Secured",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl" />,
    title: "Online Support 24/7",
    description: "Technical Support 24/7",
  },
];

export const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headephone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Rockey Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed",
    price: "220",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Printed",
    price: "220",
    aosDelay: "600",
  },
  {
    id: 6,
    img: Img6,
    title: "Printed",
    price: "220",
    aosDelay: "600",
  },
  {
    id: 7,
    img: Img7,
    title: "Printed",
    price: "220",
    aosDelay: "600",
  },
  {
    id: 8,
    img: Img8,
    title: "Printed",
    price: "220",
    aosDelay: "600",
  },
];
