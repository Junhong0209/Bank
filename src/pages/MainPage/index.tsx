import MainNav from "src/components/Nav/mainNav";
import Main from "src/components/Main/index";

const MainPage = ({ history }) => {
  return (
    <>
      <MainNav />
      <Main history={history} />
    </>
  );
};

export default MainPage;