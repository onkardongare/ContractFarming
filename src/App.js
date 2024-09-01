import { Route , Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import About from "./pages/about";
import Home from "./pages/home.page";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  );
}

export default App;
