import AccountItem from "src/components/MyAccount/accountItem";

import { ErrorToast } from "src/lib/SweetAlert";
import { getUserInfo } from "src/lib/api/auth/index.api";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import * as S from 'src/components/MyAccount/index.style';

const AccountList = (props) => {
  const [name, setName] = useState<string>('');
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      getUserInfo().then(res => {
        setName(res.data.name);
      }).catch(err => {
        ErrorToast('계정 정보를 가져오는데 실패하였습니다');
      })
    }, 1000);
    console.log(props.myAccountList);
  }, []);

  const remittancePageMove = () => {
    history.push('/remittance');
  }

  return (
    <>
      <S.AccountTitle>{name}(님)의 계좌</S.AccountTitle>
      <S.AccountButtonForm>
        <S.AccountRemittance onClick={remittancePageMove}>
          <S.AccountLink to='/remittance'>송금하기</S.AccountLink>
        </S.AccountRemittance>
        <S.AccountGet>
          <S.AccountLink to='/main'>가져오기</S.AccountLink>
        </S.AccountGet>
      </S.AccountButtonForm>
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