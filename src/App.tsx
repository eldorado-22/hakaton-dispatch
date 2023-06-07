import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import DispatchServices from "./components/DispatchServices";

function App() {
    return (
        <div>
          <Header/>
          <Hero/>
          <DispatchServices/>
        </div>
    );
}

export default App;
