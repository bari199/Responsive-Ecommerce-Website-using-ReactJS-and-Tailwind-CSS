import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About Us", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 pb-10 pt-10 gap-8">
          {/* Company details */}
          <div>
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              nisi quidem deserunt blanditiis ipsam voluptatem hic quod totam,
              inventore est neque perferendis in minus dolorum.
            </p>
            <p className="text-gray-500 mt-4">Made with ❤️ by CoderBari</p>
          </div>

          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-5 md:pl-10">
            {/* Links section 1 */}
            <div>
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data) => (
                  <li key={data.title}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links section 2 */}
            <div>
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Access
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data) => (
                  <li key={data.title}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address */}
            <div className="col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Kolkata, Sec-V</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>Phone: +91 123 456 7890</p>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4 mt-4">
                  <a href="#">
                    <FaInstagram className="text-2xl hover:text-pink-500 duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-2xl hover:text-cyan-500 duration-300" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-2xl hover:text-blue-500 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
