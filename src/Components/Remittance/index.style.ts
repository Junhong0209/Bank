import { ColorPalette } from "src/styles/colorPalette";
import styled from "styled-components";

export const RemittanceIntro = styled.div`
  padding-top: 80px;
  width: 25vw;
  margin: 0 auto;
  text-align: center;
`;

export const RemittanceTitle = styled.div`
  position: relative;
  float: left;
  width: 6vw;
  top: 8vmin;
  font-size: 3vmin;
  font-family: Yoon750, sans-serif;
  font-weight: bold;
`;

export const RemittanceNextButton = styled.button`
  position: relative;
  float: right;
  top: 8vmin;
  width: 8vmin;
  height: 4vmin;
  border: 0px;
  border-radius: 5px;
  box-shadow: 2px 2px 3px 2px ${ColorPalette.lightGrey};
  background-color: ${ColorPalette.kakao};
  font-family: Yoon720, sans-serif;
  font-weight: bold;
  font-size: 1.6vmin;
`;

export const AccountSelectForm = styled.div`
  margin-top: 20vmin;
  margin-bottom: 7vmin;
`;

export const AccountSelectTitle = styled.div`
  position: relative;
  left: 2vmin;
  bottom: 1vmin;
  text-align: start;
  font-size: 2vmin;
  font-family: Yoon720;
  font-weight: bold;
`;

export const AccountSelect = styled.select`
  position: relative;
  width: 45vmin;
  height: 3vmin;
  font-size: 1.75vmin;
  font-family: Yoon750, sans-serif;
  font-weight: bold;
  border-radius: 3px;
`;

export const InputForm = styled.div`
  position: relative;
  top: 14vmin;
  padding-top: 8vmin;
  width: 25vw;
`;

export const InputBackground = styled.div`
  margin: 0 auto;
  width: 45vmin;
  height: 4.5vmin;
  background-color: ${ColorPalette.lightGrey};
  border-radius: 5px;
  margin-bottom: 6vmin;
`;

export const InputTitle = styled.div`
  position: relative;
  left: 2vmin;
  bottom: 1vmin;
  text-align: start;
  font-family: Yoon720;
  font-weight: bold;
  font-size: 2vmin;
`;

export const AccountInput = styled.input`
  width: 41vmin;
  height: 4.4vmin;
  border: 0px;
  background-color: transparent;
  font-size: 2vmin;

  &::placeholder {
    font-size: 2vmin;
    font-family: Yoon720, sans-serif;
    font-weight: bold;
  }

  &:focus {
    font-size: 2vmin;
    outline: none;
  }
`;
