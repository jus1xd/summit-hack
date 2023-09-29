import React from "react";
import Container from "../components/Container";
import { NavLink } from "react-router-dom";

const Start = () => {
  return (
    <div className="flex items-center justify-center w-screen text-white mt-24">
      <Container>
        {/* <div className=" text-xl font-bold mb-10">ADVIPE</div> */}
        <h1 className="text-5xl font-bold w-2/3 leading-16">
          Ваше сообщение пройдет через наш{" "}
          <span className="text-fade bg-gradient-to-r from-accentGreen to-[#2fa5ff]">
            высокоскоростной
          </span>{" "}
          сервис доставки сообщений
        </h1>
        <div className="w-1/2">
          <p className="mt-10 leading-6">
            Мы предоставляем самый быстрый и надежный сервис доставки сообщений
            в мире. Мы доставляем сообщения в любую точку мира в течение 5
            секунд.
          </p>
          <p className="mt-1 leading-6">
            Сообщения могут быть доставлены в любое время суток, в любой день
            недели.
          </p>
        </div>
        <div className="flex mt-20">
          <NavLink
            to={"/messages"}
            className="transition-opacity border-2 hover:opacity-80 border-accentGreen text-accentGreen font-semibold px-6 py-1 rounded-full mt-10 mr-3"
          >
            Попробовать
          </NavLink>
          <NavLink
            to={"/about"}
            className="transition-colors border-2 hover:border-[#fff] border-[#ffffff00] text-white font-semibold px-6 py-1 rounded-full mt-10"
          >
            О нас
          </NavLink>
        </div>
      </Container>
    </div>
  );
};

export default Start;
