import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
function App() {
  return (

    <BrowserRouter>
      <div>
        <Link to="/">Main Page</Link>
        <Link to="/page-one"></Link>
        <Link to="/page-two"></Link>
      </div>
      <Routes>
        <Route path="/page-two" element={<h1> Pagina Dos</h1>} />
        <Route path="/page-one" element={<h1> Pagina Uno</h1>} />
        <Route path="/" element={<h1> Pagina Principal</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;