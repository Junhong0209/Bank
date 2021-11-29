import styled from "styled-components";
import { ColorPalette } from "src/styles/colorPalette";

export const LoginMain = styled.div`
  font-family: Yoon750;
  position: relative;
  width: 100%;
  height: 884px;
  margin: 0;
  background-color: ${ColorPalette.white};
`;

export const LoginMainContet = styled.div`
  position: relative;
  max-width: 1200px;
  height: 884px;
  margin: auto;
  top: 50px;
  font-family: Yoon750;
  font-size: 2vmin;
  font-weight: bold;
`;

export const LoginMainTitle = styled.h1`
  text-align: center;
  margin-bottom: 10vmin;
  font-size: 5vmin;
`;

export const LoginInputForm = styled.div`
  position: relative;
  left: 20vw;
  margin: 5vmin;

  input {
    border: 1px solid ${ColorPalette.black};
    border-radius: 5px;
    height: 2.5vmin;
  }
`;

export const LoginInputTitle = styled.div`
  margin-bottom: 3px;
  font-size: 2vmin;
`;

export const LoginInputBackground = styled.div`
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

export const LoginButton = styled.button`
  position: relative;
  left: 52.5vmin;
  top: 4vmin;
  width: 20vmin;
  height: 8vmin;
  border-radius: 10px;
  border: 0px;
  font-size: 2.5vmin;
  font-family: Yoon750;
  font-weight: bold;
  background-color: ${ColorPalette.white};
`;

export const BackgroundLine = styled.div`
  padding-top: 80px;
  background-color: ${ColorPalette.kakao};
  width: 100%;
  height: 720px;
  position: absolute;
  top: 0;
`;