import AccountItem from "src/components/main/MyAccount/accountItem";

import { useEffect, useState } from "react";

import * as S from 'src/components/main/index.style';
import { getUserInfo } from "src/lib/api/auth/index.api";
import { ErrorToast } from "src/lib/SweetAlert";

const AccountList = (props) => {
  const [name, setName] = useState<string>('');

  useEffect(() => {
    getUserInfo().then(res => {
      setName(res.data.name);
    }).catch(err => {
      ErrorToast('계정 정보를 가져오는데 실패하였습니다');
    })
  })

  return (
    <>
      <S.AccountTitle>{name}(님)의 계좌</S.AccountTitle>
      <S.MyAccountList>
        {
          props.myAccountList && props.myAccountList.map((myAccount) => {
            return <AccountItem myAccount={myAccount} />;
          })
        }
      </S.MyAccountList>
    </>
  );
};

export default AccountList