import MainNav from "src/components/nav/mainNav";
import AccountList from "src/components/main/myAccount/accountList";
import AddAccount from "src/components/main/addAccount/addAcount";

import {
  IntroMain,
  IntroMainContent,
} from './index.style';

const main = () => {
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

export default main;