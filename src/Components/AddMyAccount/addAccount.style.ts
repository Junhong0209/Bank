import { ColorPalette } from "src/styles/colorPalette";
import styled from "styled-components";

export const Background = styled.form`
  position: fixed;
  background-color: ${ColorPalette.white};
  padding-top: 80px;
  width: 100%;
  height: 100%;
`;

export const MainTitle = styled.div`
  padding: 5vmin 30vmin 0;
  text-align: center;
  font-family: Yoon750;
  font-size: 4.5vmin;
  font-weight: bold;
`;

export const AccountName = styled.div`
  padding: 10vmin 0 0 75vmin;
  float: left;
  font-family: Yoon750;
  font-weight: bold;
  font-size: 3vmin;
`;

export const AccountInput = styled.input`
  position: relative;
  width: 46vmin;
  height: 5vmin;
  border: 0px;
  background: transparent;
  border-radius: 10px;
  font-size: 2vmin;
  font-family: Yoon720;
  font-weight: bold;
  z-index: 1;

  &::placeholder {
    font-size: 1.5vmin;
    font-family: Yoon720;
    font-weight: bold;
  }

  &:focus {
    font-size: 2vmin;
    font-family: Yoon720;
    font-weight: bold;
    border: 0px;
    outline: none;
  }
`;

export const AccountPassword = styled.div`
  position: absolute;
  padding: 30vmin 0 0 75vmin;
  float: left;
  font-family: Yoon750;
  font-size: 3vmin;
  font-weight: bold;
`;

export const InputBackground = styled.div`
  position: relative;
  float: left;
  top: 15vmin;
  left: -12vmin;
  width: 50vmin;
  height: 5vmin;
  background: ${ColorPalette.lightGrey};
  border-radius: 10px;
  z-index: 1;
  text-align: center;
`;

export const PWInputBackground = styled.div`
  position: relative;
  float: left;
  top: 35vmin;
  left: -62vmin;
  width: 50vmin;
  height: 5vmin;
  background: ${ColorPalette.lightGrey};
  border-radius: 10px;
  text-align: center;
`;

export const SubmitButton = styled.button`
  position: absolute;
  left: 91vmin;
  top: 70vmin;
  width: 15vmin;
  height: 6vmin;
  border-radius: 10px;
  border: 0px;
  font-size: 2vmin;
  font-family: Yoon720, sans-serif;
  font-weight: bold;
  background-color: ${ColorPalette.kakao};
`;
