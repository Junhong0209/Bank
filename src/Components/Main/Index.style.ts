import { ColorPalette } from "src/styles/ColorPalette";
import styled from "styled-components";

export const IntroMain = styled.div`
  position: relative;
`;

export const IntroMainContent = styled.div`
  position: relative;
  max-width: 1200px;
  height: 884px;
  margin: auto;
  font-family: Yoon750;
`;

export const IntroMainTitle = styled.div`
  position: relative;
  left: 20vw;
  top: 5vh;
  font-weight: bold;
  font-size: 2.5vmin;
`;

export const AddAccountForm = styled.div`
  position: relative;
  border: 1px dashed ${ColorPalette.black};
  border-radius: 25px;
  width: 25vw;
  height: 10vh;
  left: 20vw;
  top: 6vh;
  text-align: center;
  line-height: 12.5vh;
`;

export const AccountTitle = styled.div`
  position: relative;
  left: 20vw;
  top: 11vh;
  font-family: 'Yoon750', sans-serif;
  font-weight: bold;
  font-size: 2vmin;
`;

export const MyAccountContent = styled.div`
  position: relative;
  width: 25vw;
  height: 12vh;
  left: 20vw;
  top: 12vh;
  background: #F2F2F2;
  border-radius: 20px;
`;

export const MyAccountContentImg = styled.img`
  position: relative;
  height: 5vh;
  top: 2.2vh;
  left: 1vw;
  line-height: 5vh;
  border-radius: 10px;
`;

export const MyAccountBankName = styled.div`
  position: relative;
  left: 4vw;
  top: -3.3vh;
  font-size: 2.5vmin;
  font-weight: bold;
`;

export const MyAccountNumber = styled.div`
  position: relative;
  left: 4vw;
  top: -3.3vh;
  font-size: 1.5vmin;
  font-family: Yoon750;
  font-weight: bold;
`;

export const MyAccountBankMoney = styled.div`
  position: relative;
  float: right;
  right: 34.5vmin;
  top: -2vmin;
  font-weight: bold;
`;

export const AccountTransfer = styled.div`
  position: relative;
  right: -3vmin;
  top: -2vmin;
  width: 3.8vw;
  height: 2.5vh;
  background: #fff;
  border-radius: 10px;
  text-align: center;
  line-height: 2.5vh;
  font-family: 'Yoon720', sans-serif;
  font-weight: bold;
  float: right;

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const AccountGet = styled.div`
  position: relative;
  right: -4.5vmin;
  top: -2vmin;
  width: 3.8vw;
  height: 2.5vh;
  background: #fff;
  border-radius: 10px;
  text-align: center;
  line-height: 2.5vh;
  font-family: 'Yoon720', sans-serif;
  font-weight: bold;
  float: right;

  a {
    text-decoration: none;
    color: #000;
  }
`;