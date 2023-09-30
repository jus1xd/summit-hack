import React from "react";
import Container from "./Container";
import { NavLink, Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/notfound";
import Start from "../pages/start";
import advipe from "../assets/advipe.svg";
import advipeDark from "../assets/advipeDark.svg";
import messLight from "../assets/messLight.svg";
import messDark from "../assets/messDark.svg";
import themeDark from "../assets/toggleThemeDark.svg";
import themeLight from "../assets/toggleThemeLight.svg";

const navLinks = [
  {
    path: "/messages",
    title: "Сообщения",
  },
];

const themeHandler = () => {
  let currentTheme = localStorage.getItem("theme");
  localStorage.setItem("theme", currentTheme === "light" ? "dark" : "light");
  window.location.reload();
};

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full text-accentGreen h-16 z-[80]">
      <Container>
        <div className="flex h-full items-center justify-between">
          <NavLink to={"/"} className="h-[30px] mr-7">
            <img src={advipe} className="h-full dark:hidden" alt="" />
            <img src={advipeDark} className="h-full hidden dark:block" alt="" />
          </NavLink>
          <nav className="h-full flex items-center select-none">
            <div className="flex">
              <img src={messDark} className="dark:block hidden" alt="" />
              <img src={messLight} className="block dark:hidden" alt="" />
              <NavLink
                to={"/messages"}
                className="cursor-pointer mr-4 ml-2 font-semibold text-darkGray dark:text-[#fff]"
              >
                Сообщения
              </NavLink>
            </div>

            <div className="flex">
              <img src={themeDark} className="dark:block hidden" alt="" />
              <img src={themeLight} className="block dark:hidden" alt="" />
              <div
                onClick={themeHandler}
                className="cursor-pointer ml-2 text-darkGray dark:text-[#fff] font-semibold"
              >
                Тема
              </div>
            </div>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Header;
