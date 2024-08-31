import { Route , Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import Home from "./pages/home.page";
import About from "./pages/about";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  );
}

export default App;
