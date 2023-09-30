import React, { ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { saveMessage } from "../store/messagesSlice";
import { messageApi } from "../store/services/messageService";
import { IDataMessage, IFullMessage } from "../models/IMessage";
import MessageCard from "./MessageCard";
import Alert from "./Alert";
import { v4 as uuidv4 } from "uuid";

type TProps = {
  phone: string;
  setSendMessageErrors: React.Dispatch<React.SetStateAction<string[]>>
};

type TSaveMessage = {
  res: {
    data: any;
  };
  newMessageData: IFullMessage;
};

const Conversation: React.FC<TProps> = ({ phone, setSendMessageErrors }) => {
  const [localMessages, setLocalMessages] = React.useState<IFullMessage[]>([]);
  const [inputMessageValue, setInputMessageValue] = React.useState("");
  const abonents = useAppSelector((state) => state.messages.abonents);

  const dispatch = useAppDispatch();

  const [sendMessage, { isLoading }] = messageApi.useSendMessageMutation();

  useEffect(() => {
    setLocalMessages(abonents.find((el) => el.phone === phone)?.messages || []);
  }, [phone]);

  const saveMessageHandler = (res: any) => {
    let newMessage: IFullMessage = {
      id: uuidv4(),
      phone: phone,
      content: inputMessageValue,
      callbackUrl: "http://10.250.2.2:2050",
      status: "Success",
    };
    setLocalMessages([...localMessages, newMessage]);
    dispatch(saveMessage(newMessage));
  };

  useEffect(() => {
    console.log(localMessages);
  }, [localMessages]);

  const sendMessageHandler = () => {
    if (inputMessageValue.trim().length > 0 && phone && !isLoading) {
      const newMessageData: IDataMessage = {
        id: uuidv4(),
        message: inputMessageValue,
        phone,
        callback_url: "http://10.250.2.2:2050/",
      };

      sendMessage(newMessageData).then((res: any) => {
        if (res.error) {
          let newError: string = res.error.data.detail;
          setSendMessageErrors(prev => [...prev, newError]);
        } else {
          saveMessageHandler(res);
          setInputMessageValue("");
        }
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessageHandler();
    }
  };

  return (
    <>

      <div className="relative border-2 border-accentGreen bg-accentGreen dark:bg-darkBg p-2 w-2/3 h-[650px] rounded-2xl">
        {/* messages  */}
        {phone ? (
          localMessages && localMessages.length > 0 ? (
            <div className="flex flex-col h-[calc(100%-110px)] overflow-y-scroll">
              {localMessages.map((item: any) => {
                return <MessageCard key={item.id} messageData={item} />;
              })}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center opacity-70">
              Нет сообщений
            </div>
          )
        ) : (
          <div className="h-full flex items-center justify-center opacity-70">
            Выберите диалог
          </div>
        )}

        <div className="flex absolute bottom-4 w-[calc(100%-10px)] ml-3">
          <input
            onChange={(e) => setInputMessageValue(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            placeholder="Напишите свое сообщение..."
            value={inputMessageValue}
            type="text"
            className="placeholder:text-[#ffffffc6] w-[calc(100%-30px)] p-2 rounded-lg bg-[#ffffff20] outline-none"
          />
        </div>
      </div>
    </>
  );
};

export default Conversation;
