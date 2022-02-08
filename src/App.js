import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import SearchBar from './components/Search';
import Home from './components/Home';
import testData from "./data"

function App() {
  console.log(testData)
  return (
    <div className="App">

      <Home />
      
    </div>
  );
}

export default App;
