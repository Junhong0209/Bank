import styled from "styled-components";

import { ColorPalette } from "src/styles/colorPalette";
import { Link } from "react-router-dom";

export const AccountTitle = styled.div`
  position: relative;
  left: 20vw;
  top: 11vh;
  font-family: 'Yoon750', sans-serif;
  font-weight: bold;
  font-size: 2vmin;
`;

export const MyAccountList = styled.div`
  position: relative;
  width: 25vw;
  left: 20vw;
  top: 20vmin;
`;

export const MyAccountContent = styled.div`
  position: relative;
  width: 25vw;
  height: 12vh;
  margin-bottom: 4vh;
  color: ${ColorPalette.white};
  background: ${ColorPalette.accountForm};
  border-radius: 20px;
  box-shadow: 3px 3px 3px 3px ${ColorPalette.darkGray};
`;

export const MyAccountBankName = styled.div`
  position: relative;
  left: 2vmin;
  top: 1vmin;
  font-size: 2.5vmin;
  font-family: Yoon750;
  font-weight: bold;
`;

export const MyAccountNumber = styled.div`
  position: relative;
  left: 2vmin;
  top: 1.3vmin;
  font-size: 1.5vmin;
  font-family: Yoon720;
  font-weight: bold;
`;

export const MyAccountBankMoney = styled.div`
  position: absolute;
  width: 22vmin;
  left: 14vmin;
  top: 4.5vmin;
  text-align: center;
  font-size: 2.5vmin;
  font-weight: bold;
`;

export const AccountRemittance = styled.span`
  position: relative;
  float: left;
  width: 15vmin;
  height: 5vmin;
  text-align: center;
  border-radius: 10px;
  background-color: ${ColorPalette.kakao};
  box-shadow: 2px 2px 2px 2px ${ColorPalette.darkGray};
`;

export const AccountGet = styled.span`
  position: relative;
  float: left;
  width: 15vmin;
  height: 5vmin;
  text-align: center;
  border-radius: 10px;
  background-color: ${ColorPalette.kakao};
  margin-left: 10vmin;
  box-shadow: 2px 2px 2px 2px ${ColorPalette.darkGray};
`;

export const AccountButtonForm = styled.div`
  position: absolute;
  left: 20vmin;
  top: 29vmin;
  margin-left: 24vmin;
`;

export const AccountLink = styled(Link)`
  font-family: Yoon720, sans-serif;
  font-weight: bold;
  font-size: 3vmin;
  line-height: 5vmin;
  color: ${ColorPalette.black};
`;
