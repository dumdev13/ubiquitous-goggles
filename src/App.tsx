import React from 'react';
import './App.css';
import MainHeader from "./Components/MainHeader";
import MainFooter from "./Components/MainFooter";
import Hero from "./Components/Hero";
import TextSection from "./Components/TextSection";
import PanelContent from "./Components/PanelContent";

function App() {


  return (
    <div className="App h-screen">
        <MainHeader/>
        <Hero/>
        <TextSection/>
        <hr className={"opacity-10 mx-6"}/>
        <PanelContent flip={true}/>
        <PanelContent flip={false}/>
        <PanelContent flip={true}/>
        <MainFooter/>
    </div>
  );
}

export default App;
