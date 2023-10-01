import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { NavLink } from "react-router-dom";

import startBg from "../assets/bgStart.png";
import TypingAnimation from "../components/TypingAnimation";

const Start = () => {
  const [pageOpened, setPageOpened] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageOpened(true);
    }, 500);
  }, []);

  return (
    <div className="start-bg flex items-center justify-center w-screen text-white mt-24">
      <Container>
        {/* <div className=" text-xl font-bold mb-10">ADVIPE</div> */}
        <div className="flex">
          <div className="">
            <h1
              className={`text-5xl font-bold w-2/3 overflow-hidden transition-all text-darkGray leading-16 dark:text-[#fff] text-animation delay-1000`}
            >
              Ваше сообщение пройдет через наш{" "}
              <span className="text-fade bg-gradient-to-r from-accentGreen to-[#2fa5ff]">
                высокоскоростной
              </span>{" "}
              сервис доставки сообщений
            </h1>
            <div className="w-1/2 text-animation delay-300">
              <p className="mt-10 leading-6 text-darkBg dark:text-[#fff]">
                Мы предоставляем самый быстрый и надежный сервис доставки
                сообщений в мире. Мы доставляем сообщения в любую точку мира в
                течение 5 секунд.
              </p>
              <p className="mt-1 leading-6 text-darkBg dark:text-[#fff] text-animation delay-500">
                Сообщения могут быть доставлены в любое время суток, в любой
                день недели.
              </p>
            </div>
            <div className="flex mt-20 text-animation delay-700">
              <NavLink
                to={"/messages"}
                className="transition-opacity border-2 hover:opacity-80 border-accentGreen text-accentGreen font-semibold px-6 py-1 rounded-full mt-10 mr-3"
              >
                Попробовать
              </NavLink>
              <NavLink
                to={"/about"}
                className="transition-colors border-2 dark:hover:border-[#fff] hover:border-accentGreen border-[#ffffff00] text-accentGreen dark:text-[#fff] font-semibold px-6 py-1 rounded-full mt-10"
              >
                О нас
              </NavLink>
            </div>
          </div>
        </div>
      </Container>
      {/* photo  */}
      <div className="absolute right-[2px] bottom-[2px] w-[800px] text-animation">
        <img src={startBg} alt="" />
      </div>
    </div>
  );
};

export default Start;
