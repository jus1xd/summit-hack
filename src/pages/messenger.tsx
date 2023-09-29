import React, { useEffect } from "react";
import Container from "../components/Container";
import DialogCard from "../components/DialogCard";
import { IFullMessage } from "../models/IMessage";
import Conversation from "../components/Conversation";
import { useAppSelector } from "../hooks/redux";

const Messenger = () => {
  const [dataAbonents, setDataAbonents] = React.useState([] as any);
  const abonents = useAppSelector((state) => state.messages.abonents);
 
  useEffect(() => {
    console.log(abonents)
    if (abonents.length > 2) {
      setDataAbonents(abonents.map((item: any) => item.phone));
    }
  }, [abonents])

  useEffect(() => {
    console.log("dataAbonents", dataAbonents)
  }, [dataAbonents])
  
  return (
    <div className="">
      <Container>
        <div className="flex">
          <div className="bg-darkGray mr-5 w-1/3 h-[600px] rounded-lg">
            <div className="flex flex-col">
              {dataAbonents.map((item: any) => {
                return <DialogCard key={item} phone={item} />;
              })}
            </div>
          </div>
          <Conversation />
        </div>
      </Container>
    </div>
  );
};

export default Messenger;
