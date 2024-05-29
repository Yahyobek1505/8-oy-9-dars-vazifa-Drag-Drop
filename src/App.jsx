import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <>
    <div className="container max-w-[1150px] mx-auto pb-8">
      <Header />
      <div className="home mt-[30px] border border-[#b4b4b4] border-spacing-2 rounded-lg px-[25px] py-2">
        <MainHeader/>
      <Home/>
      </div>
    </div>
    </>
  );
}

export default App;
