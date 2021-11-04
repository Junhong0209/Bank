import styled from "styled-components";
import Modal from 'react-modal';

import { ColorPalette } from "src/styles/ColorPalette";

export const SignUpIntroMain = styled.div`
  font-family: Yoon750, sans-serif;
  position: relative;
  width: 100%;
  height: 884px;
  margin: 0;
  background-color: ${ColorPalette.white};
`;

export const SignUpIntroMainContent = styled.div`
  position: relative;
  max-width: 1200px;
  height: 834px;
  margin: auto;
  top: 15px;
  font-family: 'Yoon750', sans-serif;
  font-size: 2vmin;
  font-weight: bold;
`;

export const SignUpMainTitle = styled.h1`
  font-family: Yoon750, sans-serif;
  text-align: center;
  margin-bottom: 1.5%;
  font-size: 5vmin;
`;

export const SignUpInputForm = styled.div`
  position: relative;
  left: 22.5vw;
  margin-bottom: 2vh;

  input[id='cb1'] + label {
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 2px solid ${ColorPalette.silver};
    cursor: pointer;
    border-radius: 50%;
  }

  input[id='cb1']:checked + label {
    background-color: ${ColorPalette.skyBlue};
  }

  input[id='cb1'] {
    display: none;
  }
`;

export const SignUpInputTitle = styled.div`
  margin-bottom: 3px;
  font-size: 2vmin;
`;

export const SignUpInputBackground = styled.div`
  width: 18vw;
  height: 5vh;
  background: ${ColorPalette.lightGrey};
  border-radius: 10px;

  input {
    width: 16vw;
    height: 4vh;
    margin-left: 0.9vw;
    margin-top: 0.4vh;
    border: 0px;
    background: rgba(0, 0, 0, 0);
    font-size: 18px;
    font-family: Yoon750;

    &::placeholder {
      color: black;
      font-size: 18px;
    }

    &:focus {
      outline: none;
      font-size: 18px;
    }
  }
`;

export const SubmitButtom = styled.input`
  position: relative;
  left: 42.5%;
  top: 4vh;
  width: 20vmin;
  height: 8vmin;
  border-radius: 10px;
  border: 0px;
  font-family: Yoon750, sans-serif;
  font-weight: bold;
  font-size: 2vmin;
  background-color: ${ColorPalette.kakao};
`;

export const AgreeProvision = styled.a`
  position: absolute;
  margin-left: 2vw;
  margin-bottom: 1vw;
  color: ${ColorPalette.black};
`;

export const ProvisionModal = styled(Modal)`
  position: fixed;
  left: 43%;
  top: 28%;
  text-align: center;
  width: 15vw;
  background: ${ColorPalette.white};
  border-radius: 10px;
  border: 1px soild ${ColorPalette.lightGrey};

  div {
    position: relative;
    width: 13vw;
    left: 6%;
    font-family: Yoon720;
    font-weight: bold;
  }
`;

export const ModalCloseButton = styled.button`
  positon: absolute;
  margin-top: 1vh;
  margin-bottom: 1vh;
  width: 3vw;
  height: 3vh;
  background: ${ColorPalette.kakao};
  border: 0px;
  border-radius: 5px;
  font-family: Yoon750;
`;

export const BackgroundLine = styled.div`
  background-color: ${ColorPalette.kakao};
  width: 100%;
  height: 720px;
  position: absolute;
  top: 0;
`;

export const PasswordError = styled.div`
  position: relative;
  left: 45vmin;
  top: -1.5vmin;
  font-size:  1.5vmin;
  color: ${ColorPalette.error};
`;