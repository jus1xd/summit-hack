import { error } from "console";
import React, { useEffect } from "react";

type TProps = {
  errorMessage?: string;
  customMessage?: string;
};

const Alert: React.FC<TProps> = ({ errorMessage, customMessage }) => {
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 2500);
  }, []);

  console.log("alert");

  return (
    <div className="bg-darkBg rounded-xl overflow-hidden mt-2">
      <div
        className={`${
          visible && "!h-10 p-2 "
        } h-0  transition-all text-[#ff0000] bg-[#ff000040]`}
      >
        {customMessage
          ? customMessage
          : errorMessage
          ? "Сообщение не отправлено"
          : "Слишком много запросов"}
      </div>
    </div>
  );
};

export default Alert;
