import AccountItem from "src/components/main/myAccount/accountItem";

import { AccountTitle } from '../index.style';

const accountList = () => {
  return (
    <>
      <AccountTitle>준홍(님)의 계좌</AccountTitle>
      <AccountItem />
    </>
  );
};

export default accountList