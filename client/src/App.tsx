import axios from 'axios';
import React from "react";
import "./App.scss";

axios.defaults.baseURL = 'http://localhost:3001/';

function App() {
  return <h1>IQNet</h1>;
}

export default App;
