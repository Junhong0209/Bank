export interface IAccount {
  money: string;
  userPhone: string;
  accountId: string;
}

export interface IAccountID {
  accountID: string;
}

export interface IRemittanceAccount {
  sendAccountId: string;
  sendAccountPw: string | number;
  receiveAccountId: string;
  money: string | number;
}