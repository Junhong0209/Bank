import { ColorPalette } from "src/styles/colorPalette";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const KakaoHead = styled.div`
  position: fixed;
  border: 0 none;
  overflow: initial;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  min-width: 828px;
  height: 81px;
  padding: 0 125px 0 170px;
`;

export const NavGlobal = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 81px;
  background: ${ColorPalette.white};
  min-width: 1120px;
  font-family: Yoon750;
`;

export const NavContent = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: border .5s;
  height: 80px;
`;

export const NavItems = styled.ul`
  width: 1080px;
  height: 100%;
  display: block;
  font-size: 0;
  text-align: right;
  margin: auto;
`;

export const NavLogo = styled.li`
  height: 80px;
  float: left;
  width: 116px;
  line-height: 80px;
  position: relatrive;
`;

export const NavItem = styled(Link)`
  height: 80px;
  min-width: 80px;
  box-sizing: border-box;
  display: inline-block;
  margin-left: 2vmin;
  z-index: 1;
  font-size: 2vmin;
  top: 3vh;
  position: relative;
  font-family: Yoon720;
  font-weight: bold;
  text-decoration: none;
  color: ${ColorPalette.black};
`;

export const KakaoLogo = styled.a`
  vertical-align: middle;
  width: 116px;
  height: 20px;
`;

export const KakaoLogoImg = styled.img`
  padding-top: 30px;
  padding-bottom: 30px;
`;