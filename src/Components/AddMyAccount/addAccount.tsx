import useInput from "src/hooks/useInput";

import { useEffect } from "react";
import { handleOpenAccount } from "src/lib/api/accont/index.api";
import { ErrorToast, SuccsessToast } from "src/lib/SweetAlert";

import * as S from "src/components/AddMyAccount/addAccount.style";

const AddAccount = ({ history }) => {
  const [accountName, onChangeAccountName] = useInput<string>('');
  const [password, onChangePassword] = useInput<string>('');

  const OpenAccount = (e) => {
    e.preventDefault();
    const data: object = {
      'accountName': accountName,
      'password': password
    }

    handleOpenAccount(data).then(res => {
      SuccsessToast('계좌 생성에 성공하였습니다');
      history.push('/main');
    }).catch(error => {
      ErrorToast('계좌 생성에 실패하였습니다');
    })
  }

  useEffect(() => {
    console.log(password);
  }, [password]);

  return (
    <>
      <S.Background onSubmit={OpenAccount}>
        <S.MainTitle>계좌 개설하기</S.MainTitle>
          <S.AccountName>계좌 이름</S.AccountName>
          <S.InputBackground>
            <S.AccountInput 
              placeholder='계좌 이름을 입력하세요' 
              type='text' 
              value={accountName} 
              onChange={onChangeAccountName} 
            />
          </S.InputBackground>
          <S.AccountPassword>계좌 비밀번호</S.AccountPassword>
          <S.PWInputBackground>
            <S.AccountInput 
              placeholder='계좌 비밀번호를 입력하세요'
              type='password' 
              value={password} 
              onChange={onChangePassword}
            />
          </S.PWInputBackground>
          <S.SubmitButton type='submit'>개설하기</S.SubmitButton>
      </S.Background>
    </>
  );
};

export default AddAccount;