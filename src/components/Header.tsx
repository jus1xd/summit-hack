import React from "react";
import Container from "./Container";
import { NavLink, Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/notfound";
import Start from "../pages/start";
import advipe from "../assets/advipe.svg";

const navLinks = [
  {
    path: "/messages",
    title: "Сообщения",
  },
];

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full text-accentGreen h-16">
      <Container>
        <div className="flex h-full items-center justify-between">
          <NavLink to={'/'} className="h-[30px] mr-7">
            <img src={advipe} className="h-full" alt="" />
          </NavLink>
          <nav className="h-full flex items-center">
            {navLinks.map((link) => (
              <NavLink to={link.path} className="cursor-pointer mr-4 font-semibold">
                {link.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Header;
