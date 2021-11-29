import AccountList from "src/components/main/MyAccount/accountList";
import AddAccountFrom from "src/components/main/AddAccount/addAcountForm";

import {
  IntroMain,
  IntroMainContent,
} from 'src/components/main/index.style';
import { useEffect, useState } from "react";
import { handleGetMyAccount } from "src/lib/api/accont/index.api";

const Main = ({ history }) => {
  const [myAccountList, setMyAccountList] = useState<[]>();

  useEffect(() => {
    handleGetMyAccount().then((res) => {
      setMyAccountList(res.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);
  
  return (
    <>
      <IntroMain>
        <IntroMainContent>
          <AddAccountFrom history={history} />
          <AccountList myAccountList={myAccountList} />
        </IntroMainContent>
      </IntroMain>
    </>
  );
};

export default Main;