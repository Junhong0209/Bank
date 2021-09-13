// import { Router, Route, Switch } from "react-router-dom";
import './App.scss'

import Main from './Components/MainPage/Main';
import Navbar from './Components/Nav/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
