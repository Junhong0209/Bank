import styled from "styled-components";
import { Link } from 'react-router-dom';

import Lion from 'src/assets/Image/Lion.png';

export const IntroMain = styled.div`
  padding-top: 80px;
  font-family: Yoon750;
  position: relative;
  width: 100%;
  height: 884px;
  margin: 0;
  background-color: #fff;
`;

export const IntroMainContent = styled.div`
  position: relative;
  max-width: 1200px;
  height: 884px;
  background-image: url(${Lion});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
  margin: auto;
`;

export const TitleMain = styled.h3`
  position: absolute;
  top: 20vh;
  left: 3vw;
  font-size: 3.5vmin;
  font-weight: bold;
`;

export const TitleSub = styled.p`
  position: absolute;
  top: 27vh;
  left: 3vw;
  font-size: 1.7vmin;
`;

export const ListSignupSignin = styled.ul`
  overflow: hidden;
  position: absolute;
  top: 36vh;
  margin-left: 2vw;

  li {
    float: left;
    margin-left: 1vw;
  }
`;

export const SignUpLink = styled(Link)`
  display: block;
  width: 178px;
  height: 56px;
  border: 1px solid rgba(255, 255, 255, .3);
  border-radius: 12px;
  font-size: 16.2px;
  font-weight: bold;
  line-height: 56px;
  color: #333;
  background: #fff;
  text-align: center;
  -webkit-font-smoothing: antialiased;
`;

export const SignInLink = styled(Link)`
  display: block;
  width: 178px;
  height: 56px;
  border: 1px solid rgba(255, 255, 255, .3);
  border-radius: 12px;
  font-size: 16.2px;
  font-weight: bold;
  line-height: 56px;
  color: #333;
  background: #fff;
  text-align: center;
  -webkit-font-smoothing: antialiased;
`;

export const BackgroundLine = styled.div`
  padding-top: 80px;
  width: 100%;
  height: 720px;
  background-color: #ffef6b;
  position: absolute;
  top: 0;
`;
