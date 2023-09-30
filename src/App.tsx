import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/start";
import NotFoundPage from "./pages/notfound";
import Header from "./components/Header";
import Messenger from "./pages/messenger";
import Alert from "./components/Alert";
import About from "./pages/about";

function App() {
  const [sendMessageErrors, setSendMessageErrors] = React.useState<any[]>([]);
  const [darkMode, setDarkMode] = React.useState<boolean>(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  return (
    <div className={`${darkMode && "dark"} `}>
      <div
        className={`relative bg-[#fff] dark:bg-darkBg h-[calc(100vh-0px)] light:bg-[#fff] pt-20 `}
      >
        <div className="flex flex-col absolute top-16 right-5 z-50">
          {sendMessageErrors.slice().map((el: string) => {
            return <Alert key={Math.random() * 10} errorMessage={el} />;
          })}
        </div>
        <Header />
        <div className="">
          <Routes>
            <Route path="/404/" element={<NotFoundPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Start />} />
            <Route
              path="/messages"
              element={
                <Messenger setSendMessageErrors={setSendMessageErrors} />
              }
            />
            <Route
              path="/messages/:id"
              element={
                <Messenger setSendMessageErrors={setSendMessageErrors} />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
