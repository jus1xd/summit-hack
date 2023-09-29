import React from "react";
import { IFullMessage } from "../models/IMessage";
import { NavLink } from "react-router-dom";

type TProps = {
  data: IFullMessage;
};

const Message: React.FC<TProps> = ({ data }) => {
  return <NavLink to={`/messages/${data.id}`} className="py-2 px-4 hover:bg-[#ffffff20] transition-colors">{data.phone}</NavLink>;
};

export default Message;
