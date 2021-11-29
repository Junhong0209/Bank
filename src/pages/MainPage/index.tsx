import MainNav from "src/components/Nav/mainNav";
import Main from "src/components/main/index";

const MainPage = ({ history }) => {
  return (
    <>
      <MainNav />
      <Main history={history} />
    </>
  );
};

export default MainPage;