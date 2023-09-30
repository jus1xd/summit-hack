import React, { useEffect, useState } from "react";
import { messageApi } from "../store/services/messageService";
import { IFullMessage } from "../models/IMessage";

type TProps = {
  messageData: IFullMessage;
};

const MessageCard: React.FC<TProps> = ({ messageData }) => {
  const [messageText, setMessageText] = useState<string>();

  useEffect(() => {
    setMessageText(messageData.content);
  }, []);

  return (
    <>
      <div className="flex">
        <div className="dark:bg-[#ffffff20] bg-[#ffffff50] w-[calc(100%-20px)] break-words rounded-lg px-3 py-2 m-2 mb-1">
          {messageText}
        </div>
      </div>
    </>
  );
};

export default MessageCard;
