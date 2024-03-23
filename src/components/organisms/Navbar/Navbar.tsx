"use client";

import Logo from "@svgs/Logo";
import Menu from "@svgs/Menu";
import Profile from "@svgs/Profile";
import ShopCar from "@svgs/ShopCar";
import Link from "next/link";
import { useState } from "react";
import { navbarData } from "./navbarData";

const Navbar = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="flex flex-wrap">
      <section className="relative mx-auto">
        <nav className="flex justify-between bg-gray-900 text-white w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <a className="text-3xl font-bold font-heading" href="#">
              <Logo />
            </a>
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              {navbarData.map((itemNavigation) => {
                return (
                  <li
                    className="hover:text-gray-200"
                    key={itemNavigation.title}
                  >
                    <Link href={itemNavigation.url}>
                      {itemNavigation.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="hidden xl:flex items-center space-x-5">
              <Link href="/shopDetail" passHref legacyBehavior>
                <a
                  className="flex items-center hover:text-gray-200"
                  href="/shopDetail"
                >
                  <ShopCar />
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </a>
              </Link>

              <Link href="/login" passHref legacyBehavior>
                <a
                  className="flex items-center hover:text-gray-200"
                  href="/login"
                >
                  <Profile />
                </a>
              </Link>
            </div>
          </div>
          <Link href="/shopDetail" passHref legacyBehavior>
            <a
              className="flex items-center hover:text-gray-200 xl:hidden"
              href="/shopDetail"
            >
              <ShopCar />
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a>
          </Link>
          <a
            className="navbar-burger self-center mr-12 xl:hidden"
            onClick={() => setopen(!open)}
          >
            <Menu />
          </a>
        </nav>
        {open && (
          <div className="absolute right-0 w-full max-w-screen-sm mt-2 bg-gray-900 text-white rounded-md shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {navbarData.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-start p-2 rounded-lg hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  <div className="bg-teal-500 text-white rounded-lg p-3">
                    {item.icon}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm">{item.subTitle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Navbar;
