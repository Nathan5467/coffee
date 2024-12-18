

import React, { useState } from "react";
import { SiCoffeescript } from "react-icons/si";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  // Correctly define handleChange function
  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className=" fixed w-full">
      <div>
        <div className="flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-[#D2B48C] to-[#8C5A3C] shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
          {/* Logo Section */}
          <div className="flex flex-row items-center cursor-pointer gap-2">
            <span aria-hidden="true">
              <SiCoffeescript size={25} />
            </span>
            <h1 className="text-xl font-semibold">CafePulse</h1>
          </div>

          {/* Navigation Bar */}
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-[#93694b]"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-[#6F4E37]"
            >
              Menu
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-[#6F4E37]"
            >
              About Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-[#6F4E37]"
            >
              Products
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-[#6F4E37]"
            >
              Reviews
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
          </nav>

          {/* Login Button */}
          <div className="hidden lg:flex">
            <Button title="Login" />
          </div>
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-[#6F4E37]"
            onClick={closeMenu} 
          >
            Home
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-[#6F4E37]"
            onClick={closeMenu}
          >
            Menu
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-[#6F4E37]"
            onClick={closeMenu}
          >
            About Us
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="products"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-[#6F4E37]"
            onClick={closeMenu}
          >
            Products
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-[#6F4E37]"
            onClick={closeMenu}
          >
            Reviews
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Button title="Login" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
