import KakaoBank from 'src/assets/Image/kakaoBankLogo.png';
import makeMoneyComma from 'src/utils/makeMoneyComma';
import makeAccountNumber from 'src/utils/makeAccountNumber';

import * as S from "src/components/main/index.style";

const accountItem = ({ myAccount }) => {
  const { accountId, money } = myAccount;

  return (
    <S.MyAccountContent>
      <S.MyAccountContentImg src={KakaoBank} alt='은행 사진' />
      <S.MyAccountBankName>카카오뱅크</S.MyAccountBankName>
      <S.MyAccountNumber>{makeAccountNumber(accountId)}</S.MyAccountNumber>
      <S.MyAccountBankMoney>{makeMoneyComma(money)}원</S.MyAccountBankMoney>
      <S.AccountGet>
        <a href='/main' title='가져오러 가기'>가져오기</a>
      </S.AccountGet>
      <S.AccountTransfer>
        <a href='/main' title='이체하러 가기'>이체</a>
      </S.AccountTransfer>
    </S.MyAccountContent>
  );
};

export default accountItem;