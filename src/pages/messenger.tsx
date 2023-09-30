import React, { useEffect } from "react";
import Container from "../components/Container";
import DialogCard from "../components/DialogCard";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useParams } from "react-router-dom";
import Conversation from "../components/Conversation";
import { createAbonent } from "../store/messagesSlice";
import Alert from "../components/Alert";

type TProps = {
  setSendMessageErrors: React.Dispatch<React.SetStateAction<string[]>>;
};

const Messenger: React.FC<TProps> = ({ setSendMessageErrors }) => {
  const [abonentInputValue, setAbonentInputValue] = React.useState("");
  const [createAbonentValue, setCreateAbonentValue] =
    React.useState("");
  const [createAbonentError, setCreateAbonentError] = React.useState("");
  const [dataAbonents, setDataAbonents] = React.useState([] as any);
  const abonents = useAppSelector((state) => state.messages.abonents);
  const dispatch = useAppDispatch();

  // получить id abonent из url
  const params = useParams();
  const abonentId = params.id;

  useEffect(() => {
    console.log("abonents in store", abonents);
    if (abonents.length > 0) {
      setDataAbonents(abonents.map((item: any) => item.phone));
    }
  }, [abonents]);

  useEffect(() => {
    console.log("dataAbonents", dataAbonents);
  }, [dataAbonents]);

  const createAbonentHandler = () => {
    if (createAbonentValue.trim().length > 0) {
      if (!dataAbonents.find((el: string) => el === createAbonentValue)) {
        dispatch(createAbonent(createAbonentValue));
      } else {
        setCreateAbonentError("Такой номер уже есть");
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      createAbonentHandler();
    }
  };

  return (
    <div className="">
      <Container>
        <div className="flex">
          <div className="border-2 border-accentGreen bg-accentGreen dark:bg-darkBg mr-5 w-1/3 p-3 h-[650px] rounded-2xl overflow-hidden">
            <div className="font-semibold  text-lg mb-3">Номера</div>
            <div className="">
              <input
                onChange={(e) => setAbonentInputValue(e.target.value)}
                placeholder="Поиск по номеру"
                value={abonentInputValue}
                type="text"
                className="placeholder:text-[#ffffffd0] w-full p-2 mb-4 rounded-lg bg-[#ffffff50] dark:bg-[#ffffff20] outline-none"
              />
              <div className="font-semibold text-sm mb-2">Создать диалог</div>

              <div className="flex justify-between">
                <input
                  onChange={(e) => setCreateAbonentValue(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e)}
                  placeholder="+79205550517"
                  value={createAbonentValue}
                  type="text"
                  className="placeholder:text-[#ffffffd0] w-4/5 mr-3  p-2 mb-2 rounded-lg bg-[#ffffff50] dark:bg-[#ffffff20] outline-none"
                />
                <button
                  className="px-5 h-[40px] bg-[#ffffff50] dark:bg-[#ffffff20] rounded-lg text-sm"
                  onClick={createAbonentHandler}
                >
                  OK
                </button>
              </div>
              {createAbonentError && (
                <div className="mb-3">
                  <Alert customMessage="Такой номер уже есть" />
                </div>
              )}
            </div>
            <div className="font-semibold text-sm mb-2">Ваши номера</div>
            <div className="flex flex-col mt-2">
              {dataAbonents &&
                dataAbonents.length > 0 &&
                dataAbonents
                  .slice()
                  .filter((el: any) => el.includes(abonentInputValue))
                  .map((item: any) => {
                    return <DialogCard key={item} phone={item} />;
                  })}
            </div>
          </div>
          <Conversation
            phone={abonentId || ""}
            setSendMessageErrors={setSendMessageErrors}
          />
        </div>
      </Container>
    </div>
  );
};

export default Messenger;
