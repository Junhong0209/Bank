import MainNav from "../Nav/MainNav";
import AccountList from "./MyAccount/AccountList";
import AddAccount from "./AddAccount/AddAcount";

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