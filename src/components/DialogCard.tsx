import React, { useEffect, useState } from "react";
import { IFullMessage } from "../models/IMessage";
import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { deleteAbonent } from "../store/messagesSlice";

type TProps = {
  phone: string;
};

const DialogCard: React.FC<TProps> = ({ phone }) => {
  // получить id abonent из url
  const params = useParams();
  const abonentId = params.id;
  const [active, setActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (abonentId === phone) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [abonentId]);

  const deleteAbonentHandler = () => {
    if (phone) {
      dispatch(deleteAbonent(phone));
    }
  };

  return (
    <div className="group relative bg-[#fff] dark:bg-darkBg rounded-lg overflow-hidden h-10 mb-2">
      <NavLink
        to={`/messages/${phone}`}
        className={`absolute top-0 left-0 z-20 w-full group-hover:w-3/4 h-full flex justify-between  py-2 px-4 ${
          active
            ? "dark:bg-accentGreen bg-[#fff] text-accentGreen dark:text-[#fff]"
            : "dark:bg-[#292929] bg-[#71d1ac] text-[#fff]"
        } transition-all`}
      >
        <div className="">{phone}</div>
      </NavLink>
      <div
        onClick={deleteAbonentHandler}
        className="absolute flex cursor-pointer justify-end items-center px-2 w-full h-full z-10 bg-[#ff00003b] text-[#f00] text-sm"
      >
        Удалить
      </div>
    </div>
  );
};

export default DialogCard;
