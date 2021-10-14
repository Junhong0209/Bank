import { Route } from "react-router-dom";

import FirstPage from './FirstPage/FirstPage';
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

const Index = () => {
  return (
    <>
      <Route exact path='/' component={FirstPage} />
      <Route exact path='/login' component={SignIn} />
      <Route exact path='/signup' component={SignUp} />
    </>
  );
};

export default Index