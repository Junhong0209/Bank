import { Route } from "react-router-dom";
import './App.scss'

import FirstPage from './Components/FirstPage/FirstPage';
import SignIn from "./Components/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Route path='/' component={FirstPage} exact />
      <Route path='/Login' component={SignIn} />
    </div>
  );
}

export default App;
