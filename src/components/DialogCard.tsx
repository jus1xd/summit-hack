import React from "react";
import { IFullMessage } from "../models/IMessage";
import { NavLink } from "react-router-dom";

type TProps = {
  phone: string;
};

const DialogCard: React.FC<TProps> = ({ phone }) => {
  return <NavLink to={`/messages/${phone}`} className="py-2 px-4 hover:bg-[#ffffff20] transition-colors">{phone}</NavLink>;
};

export default DialogCard;
