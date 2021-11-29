import KakaoBank from 'src/assets/Image/kakaoBankLogo.png';
import makeMoneyComma from 'src/utils/makeMoneyComma';
import makeAccountNumber from 'src/utils/makeAccountNumber';

import { ErrorToast, SuccsessToast } from 'src/lib/SweetAlert';

import * as S from "src/components/MyAccount/index.style";

const accountItem = ({ myAccount }) => {
  const { accountId, money } = myAccount;

  const copyAccountNumber = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      SuccsessToast('계좌번호가 복사 되었습니다!');
    } catch (error) {
      ErrorToast('계좌번호가 복사 되지않았습니다!');
    }
  }

  return (
    <S.MyAccountContent>
      <S.MyAccountContentImg src={KakaoBank} alt='은행 사진' />
      <S.MyAccountBankName>카카오뱅크</S.MyAccountBankName>
      <S.MyAccountNumber 
        onClick={() => 
          copyAccountNumber(accountId)
        }
      >
        {makeAccountNumber(accountId)}
      </S.MyAccountNumber>
      <S.MyAccountBankMoney>{makeMoneyComma(money)}원</S.MyAccountBankMoney>
      <S.AccountGet>
        <a href='/main' title='가져오러 가기'>가져오기</a>
      </S.AccountGet>
      <S.AccountTransfer>
        <a href='/remittance' title='이체하러 가기'>이체</a>
      </S.AccountTransfer>
    </S.MyAccountContent>
  );
};

export default accountItem;