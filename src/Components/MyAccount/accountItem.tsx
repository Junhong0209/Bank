import copyAccountID from 'src/utils/copyAccountID';
import makeMoneyComma from 'src/utils/makeMoneyComma';
import makeAccountNumber from 'src/utils/makeAccountNumber';

import * as S from "src/components/MyAccount/index.style";

const accountItem = ({ myAccount }) => {
  const { accountId, money } = myAccount;

  return (
    <S.MyAccountContent>
      <S.MyAccountBankName>카카오뱅크</S.MyAccountBankName>
      <S.MyAccountNumber 
        onClick={() => 
          copyAccountID(makeAccountNumber(accountId))
        }
      >
        {makeAccountNumber(accountId)}
      </S.MyAccountNumber>
      <S.MyAccountBankMoney>{makeMoneyComma(money)}원</S.MyAccountBankMoney>
    </S.MyAccountContent>
  );
};

export default accountItem;