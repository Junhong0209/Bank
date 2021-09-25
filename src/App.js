import { Route } from "react-router-dom";
import './App.scss'

import FirstPage from './Components/FirstPage/FirstPage';

function App() {
  return (
    <div className="App">
      <Route path='/' component={FirstPage} exact />
    </div>
  );
}

export default App;
