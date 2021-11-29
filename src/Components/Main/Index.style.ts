import styled from "styled-components";

import { ColorPalette } from "src/styles/colorPalette";

export const IntroMain = styled.div`
  position: relative;
  padding-top: 80px;
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
