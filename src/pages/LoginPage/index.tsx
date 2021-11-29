import Navbar from "src/components/Nav/navbar"
import SignIn from "src/components/Login"

const LoginPage = ({ history }) => {
  return (
    <>
      <Navbar />
      <SignIn history={history} />
    </>
  );
};

export default LoginPage;