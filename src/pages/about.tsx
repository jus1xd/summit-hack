import React from "react";
import Container from "../components/Container";
import { NavLink } from "react-router-dom";

import startBg from "../assets/bgStart.png";
import aboutBg from "../assets/aboutBg.png";

const About = () => {
  return (
    <div className="start-bg flex items-center justify-center w-screen text-white mt-16">
      <Container>
        {/* <div className=" text-xl font-bold mb-10">ADVIPE</div> */}
        <div className="flex relative z-20">
          <div className="">
            <h1 className="text-5xl font-bold w-2/3 text-darkGray leading-16 dark:text-[#fff]">
              Здесь мы расскажем про{" "}
              <span className="text-fade bg-gradient-to-r from-accentGreen to-[#2fa5ff]">
                компанию AdVipe
              </span>{" "}
              - сервис доставки сообщений
            </h1>
            <div className="w-2/3">
              <p className="mt-10 leading-6 text-darkBg dark:text-[#fff]">
                Инновационная компания, специализирующаяся на оказании услуг по
                отправке персонализированных сообщений клиентам. Наша цель -
                упростить и усовершенствовать взаимодействие между бизнесами и
                их аудиторией. 
                Мы предоставляем надежное и высокоэффективное
                средство для достижения клиентов, обеспечивая быструю и точную
                доставку сообщений. Наша команда экспертов работает над
                созданием индивидуальных решений для каждого клиента
              </p>
              <p className="mt-1 leading-6 text-darkBg dark:text-[#fff]">
                Наши ценности - качество, надежность и результаты. Мы стремимся
                предоставлять выдающиеся услуги, уделяя внимание деталям и
                обеспечивая надежную доставку сообщений вовремя.
              </p>
            </div>
          </div>
        </div>
      </Container>
      {/* photo  */}
      <div className="absolute right-[2px] bottom-[2px] w-full">
        <img src={aboutBg} alt="" />
      </div>
    </div>
  );
};

export default About;
