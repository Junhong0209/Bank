import { Route } from "react-router-dom";

import Welcome from 'src/components/welcome/welcome';
import Main from "src/components/main";
import SignIn from "src/components/signIn/signIn";
import SignUp from "src/components/signUp/signUp";
import PrivateRoute from "src/utils/coustomRoute/privateRoute";

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