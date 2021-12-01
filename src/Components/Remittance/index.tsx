import useInput from 'src/hooks/useInput';
import removeAccountNumber from 'src/utils/removeAccountNumber';

import { useHistory } from 'react-router-dom';
import { handleSendAccount } from 'src/lib/api/accont/index.api';
import { IRemittanceAccount } from 'src/types/account/index.type';
import { ErrorToast, SuccsessToast } from 'src/lib/SweetAlert';

import * as S from 'src/components/Remittance/index.style';

const Remittance = () => {
  const history = useHistory();

  const [sendAccountID, onChangeSendAccountID] = useInput<string>('');
  const [sendAccountPW, onChangeSendAccountPW] = useInput<string | number>('');
  const [receiveAccountID, onChangeReceiveAccountID] = useInput<string>('');
  const [money, onChangeMoney] = useInput<string | number>('');

  const remittanceAccount = () => {
    const data: IRemittanceAccount = {
      sendAccountId: removeAccountNumber(sendAccountID),
      sendAccountPw: sendAccountPW,
      receiveAccountId: removeAccountNumber(receiveAccountID),
      money: Number(money)
    }

    handleSendAccount(data).then((res) => {
      SuccsessToast('송금에 성공하였습니다');
      history.push('/main');
    }).catch((err) => {
      if (err.response.status === 403) {
        ErrorToast('계좌번호 또는 비밀번호가 잘못되었습니다');
      } else if (err.response.status === 409) {
        ErrorToast('자기 자신에게 보낼 수 없습니다');
      }
    })
  }

  return (
    <S.RemittanceIntro>
      <S.RemittanceTitle>송금하기</S.RemittanceTitle>
      <S.RemittanceNextButton onClick={remittanceAccount}>송금</S.RemittanceNextButton>
      <S.InputForm>
        <S.InputTitle>계좌 입력</S.InputTitle>
        <S.InputBackground>
          <S.AccountInput 
            placeholder='계좌를 입력하세요'
            onChange={onChangeSendAccountID} 
            value={sendAccountID}
          />
        </S.InputBackground>
        <S.InputTitle>계좌 비밀번호</S.InputTitle>
        <S.InputBackground>
          <S.AccountInput 
            placeholder='계좌 비밀번호를 입력하세요' 
            onChange={onChangeSendAccountPW}
            value={sendAccountPW}
            type='password'
          />
        </S.InputBackground>
        <S.InputTitle>송금할 계좌</S.InputTitle>
        <S.InputBackground>
          <S.AccountInput 
            placeholder='송금할 계좌를 입력하세요' 
            onChange={onChangeReceiveAccountID} 
            value={receiveAccountID} 
          />
        </S.InputBackground>
        <S.InputTitle>송금할 금액</S.InputTitle>
        <S.InputBackground>
          <S.AccountInput 
            placeholder='송금할 금액을 입력하세요' 
            onChange={onChangeMoney} 
            value={money} 
            type='number'
          />
        </S.InputBackground>
      </S.InputForm>
    </S.RemittanceIntro>
  );
};

export default Remittance;