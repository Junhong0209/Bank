import { Route } from "react-router-dom";

import Welcome from './Welcome/Welcome';
import Main from "src/Components/Main/Index";
import SignIn from "src/Components/SignIn/SignIn";
import SignUp from "src/Components/SignUp/SignUp";
import PrivateRoute from "src/Utils/CoustomRoute/PrivateRoute";

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