import { Route } from "react-router-dom";

import Welcome from './Welcome/Welcome';
import Main from "./Main/Index";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import PrivateRoute from "../Utils/CoustomRoute/PrivateRoute";

const Index = () => {
  return (
    <>
      <Route exact path='/' component={Welcome} />
      <Route exact path='/login' component={SignIn} />
      <Route exact path='/signup' component={SignUp} />
      <PrivateRoute component={Main} path='/main' exact />
    </>
  );
};

export default Index