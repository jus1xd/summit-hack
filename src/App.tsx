import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/start";
import NotFoundPage from "./pages/notfound";
import Header from "./components/Header";
import Messenger from "./pages/messenger";

function App() {
  return (
    <>
      <div className="bg-darkBg pt-20">
        <Header />
        <div className="">
          <Routes>
            <Route path="/404/" element={<NotFoundPage />} />
            <Route path="/" element={<Start />} />
            <Route path="/messages" element={<Messenger />} />
            <Route path="/messages/:id" element={<Messenger />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
