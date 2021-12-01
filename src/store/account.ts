import { atom } from "recoil";
import { IAccount, IAccountID } from "src/types/account/index.type";

export const detailCardInfoState = atom<IAccount>({
  key: 'detailCardInfoState',
  default: { money: '', userPhone: '', accountId: '' },
});

export const accountIDState = atom<IAccountID>({
  key: 'accountIDState',
  default: { accountID: '' }
});