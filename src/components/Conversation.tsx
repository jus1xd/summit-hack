import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { saveMessage } from "../store/messagesSlice";
import { messageApi } from "../store/services/messageService";
import { IDataMessage } from "../models/IMessage";

type TProps = {
  messages: IDataMessage[];
};

const Conversation: React.FC<TProps> = ({ messages }) => {
  const [localMessages, setLocalMessages] = React.useState<IDataMessage[]>(messages);
  const [inputMessageValue, setInputMessageValue] = React.useState("Hi");
  const [inputPhoneValue, setInputPhoneValue] = React.useState("+79205550517");
  const dispatch = useAppDispatch();

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
      {/* messages  */}
      <div className="flex flex-col h-[calc(100%-110px)] overflow-y-scroll">
        {messages.map((item: any) => {
          return (
            <div className="flex">
              <div className="bg-[#ffffff20] w-[calc(100%-20px)] break-words rounded-lg px-3 py-2 m-2 mb-1">
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col ">
        <input
          onChange={(e) => setInputPhoneValue(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          placeholder="Phone..."
          value={inputPhoneValue}
          type="text"
          className="absolute bottom-14 left-[15px] w-[calc(100%-30px)] p-2 rounded-lg bg-[#ffffff20] outline-none"
        />
        <input
          onChange={(e) => setInputMessageValue(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          placeholder="Type your message here..."
          value={inputMessageValue}
          type="text"
          className="absolute bottom-3 left-[15px] w-[calc(100%-30px)] p-2 rounded-lg bg-[#ffffff20] outline-none"
        />
      </div>
    </div>
  );
};

export default Conversation;
