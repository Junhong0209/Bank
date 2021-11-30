import { ColorPalette } from "src/styles/colorPalette";
import styled from "styled-components";

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
  top: 12vh;
`;

export const MyAccountContent = styled.div`
  position: relative;
  width: 25vw;
  height: 12vh;
  margin-bottom: 4vh;
  background: ${ColorPalette.lightGrey};
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
  font-family: Yoon750;
  font-weight: bold;
`;

export const MyAccountBankMoney = styled.div`
  position: absolute;
  width: 25vw;
  top: 4.5vmin;
  text-align: center;
  font-size: 2.5vmin;
  font-weight: bold;
`;

export const AccountTransfer = styled.div`
  position: relative;
  left: 31vmin;
  top: -4.5vmin;
  width: 3.8vw;
  height: 2.5vh;
  background: #fff;
  border-radius: 10px;
  text-align: center;
  line-height: 2.5vh;
  font-family: 'Yoon720', sans-serif;
  font-weight: bold;

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const AccountGet = styled.div`
  position: relative;
  left: 40vmin;
  top: -2vmin;
  width: 3.8vw;
  height: 2.5vh;
  background: #fff;
  border-radius: 10px;
  text-align: center;
  line-height: 2.5vh;
  font-family: 'Yoon720', sans-serif;
  font-weight: bold;

  a {
    position: relative;
    top: -2vmin;
    text-decoration: none;
    color: #000;
  }
`;
