import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import LandingPage from "./views/landingPage/LandingPage";
import "./App.scss";

axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
    </Routes>
  );
}

export default App;
