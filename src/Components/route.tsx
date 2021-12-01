import { Route } from "react-router-dom";

import AddAccountPage from "src/pages/AddAccountPage";
import LoginPage from "src/pages/LoginPage";
import MainPage from "src/pages/MainPage";
import RegisterPage from "src/pages/RegisterPage";
import RemittancePage from "src/pages/RemittancePage";
import WelcomePage from "src/pages/WelcomePage";

import PrivateRoute from "src/utils/customRoute/privateRoute";

const Index = () => {
  return (
    <>
      <Route component={WelcomePage} path='/' exact />
      <Route component={LoginPage} path='/login' exact />
      <Route component={RegisterPage} path='/signup' exact />
      <PrivateRoute component={AddAccountPage} path='/addAccount' exact />
      <PrivateRoute component={MainPage} path='/main' exact />
      <PrivateRoute component={RemittancePage} path='/remittance' exact />
    </>
  );
};

export default Index