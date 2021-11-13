import MainNav from "src/Components/Nav/MainNav";
import AccountList from "src/Components/Main/MyAccount/AccountList";
import AddAccount from "src/Components/Main/AddAccount/AddAcount";

import {
  IntroMain,
  IntroMainContent,
} from './Index.style';

const Main = () => {
  return (
    <>
      <MainNav />
      <IntroMain>
        <IntroMainContent>
          <AddAccount />
          <AccountList />
        </IntroMainContent>
      </IntroMain>
    </>
  );
};

export default Main;