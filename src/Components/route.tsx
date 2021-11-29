import { Route } from "react-router-dom";

import AddAccountPage from "src/pages/AddAccountPage";
import LoginPage from "src/pages/LoginPage";
import MainPage from "src/pages/MainPage";
import RegisterPage from "src/pages/RegisterPage";
import WelcomePage from "src/pages/WelcomePage";

import PrivateRoute from "src/utils/coustomRoute/privateRoute";

const Index = () => {
  return (
    <>
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/login' component={RegisterPage} />
      <Route exact path='/signup' component={LoginPage} />
      <Route exact path='/addAccount' component={AddAccountPage} />
      <PrivateRoute component={MainPage} path='/main' exact />
    </>
  );
};

export default Index