import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { saveMessage } from "../store/messagesSlice";
import { messageApi } from "../store/services/messageService";
import { IDataMessage } from "../models/IMessage";

type TProps = {
  // messages: string;
};

const Conversation: React.FC<TProps> = ({}) => {
  const [inputMessageValue, setInputMessageValue] = React.useState("");
  const [inputPhoneValue, setInputPhoneValue] = React.useState("");
  const dispatch = useAppDispatch();
  const messages = useAppSelector((state) => state.messages.abonents);

  const [sendMessage] = messageApi.useSendMessageMutation();

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  const sendMessageHandler = () => {
    if (
      inputMessageValue.trim().length > 0 &&
      inputPhoneValue.trim().length > 0
    ) {
      const newMessageData: IDataMessage = {
        content: inputMessageValue,
        phone: inputPhoneValue,
        callbackUrl: "http://10.250.2.2:2080/",
      };
      // sendMessage(newMessageData).then((res: any) => {
        // console.log(res.data);
        dispatch(saveMessage(newMessageData));
      // });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessageHandler();
    }
  };

  return (
    <div className="relative bg-darkGray w-2/3 h-[600px] rounded-lg">
      <div className="flex flex-col ">
        <input
          onChange={(e) => setInputPhoneValue(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          placeholder="Phone..."
          type="text"
          className="absolute bottom-14 left-[15px] w-[calc(100%-30px)] p-2 rounded-lg bg-[#ffffff20] outline-none"
        />
        <input
          onChange={(e) => setInputMessageValue(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          placeholder="Type your message here..."
          type="text"
          className="absolute bottom-3 left-[15px] w-[calc(100%-30px)] p-2 rounded-lg bg-[#ffffff20] outline-none"
        />
      </div>
    </div>
  );
};

export default Conversation;
