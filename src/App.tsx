import React from 'react';
import './App.css';
import MainHeader from "./Components/MainHeader";
import MainFooter from "./Components/MainFooter";
import Hero from "./Components/Hero";

function App() {


  return (
    <div className="App h-screen">
        <MainHeader/>
        <Hero/>
        <MainFooter/>
    </div>
  );
}

export default App;
