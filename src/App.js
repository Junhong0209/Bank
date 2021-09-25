import { Route } from "react-router-dom";
import './App.scss'

import FirstPage from './Components/FirstPage/FirstPage';
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Route path='/' component={FirstPage} exact />
      <Route path='/Login' component={SignIn} />
      <Route path='/Signup' component={SignUp} />
    </div>
  );
}

export default App;
