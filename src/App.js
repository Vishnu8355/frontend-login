import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={[<Header/>,<Home/>,<Footer/>]}/>
        <Route path="/home" element={[<Header/>,<Home/>,<Footer/>]}/>
        <Route path="/registration" element={[<Header/>,<Registration/>]}/>
        <Route path="/login" element={[<Header/>,<Login/>]}/>
      </Routes>
    </Router>
      
    </>
  )
}
