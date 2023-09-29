import React, { useEffect } from "react";
import Container from "../components/Container";
import DialogCard from "../components/DialogCard";
import { useAppSelector } from "../hooks/redux";
import { useParams } from "react-router-dom";
import Conversation from "../components/Conversation";

const Messenger = () => {
  const [abonentInputValue, setAbonentInputValue] = React.useState("");
  const [dataAbonents, setDataAbonents] = React.useState([] as any);
  const abonents = useAppSelector((state) => state.messages.abonents);

  // получить id abonent из url
  const params = useParams();
  const abonentId = params.id;

  useEffect(() => {
    console.log(abonents);
    if (abonents.length > 0) {
      setDataAbonents(abonents.map((item: any) => item.phone));
    }
  }, [abonents]);

  useEffect(() => {
    console.log("dataAbonents", dataAbonents);
  }, [dataAbonents]);

  return (
    <div className="">
      <Container>
        <div className="flex">
          <div className="bg-darkGray mr-5 w-1/3 p-3 h-[600px] rounded-lg overflow-hidden">
            <div className="font-semibold  text-lg mb-3">Номера</div>
            <div className="">
              <input
                onChange={(e) => setAbonentInputValue(e.target.value)}
                placeholder="Поиск по номеру"
                value={abonentInputValue}
                type="text"
                className=" w-full p-2 mb-2 rounded-lg bg-[#ffffff20] outline-none"
              />
            </div>
            <div className="flex flex-col">
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
            messages={
              abonents.find((el) => el.phone === abonentId)?.messages || []
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default Messenger;
