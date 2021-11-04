import { GrUserSettings } from 'react-icons/gr'

import Logo from '../../assets/Image/logo.svg';

import {
  KakaoHead,
  NavGlobal,
  NavContent,
  NavItems,
  NavItem,
  NavLogo,
  KakaoLogo,
  KakaoLogoImg
} from './Nav.style';

const MainNav = () => {

  return (
    <KakaoHead className='static'>
      <NavGlobal>
        <NavContent>
          <NavItems>
            <NavLogo>
              <KakaoLogo href='/'><KakaoLogoImg src={Logo} alt='kakaobank' /></KakaoLogo>
            </NavLogo>
            <NavItem>
              계좌 개설
            </NavItem>
            <NavItem>
              계좌 추가
            </NavItem>
            <NavItem>
              <GrUserSettings />
            </NavItem>
          </NavItems>
        </NavContent>
      </NavGlobal>
    </KakaoHead>
  );
}

export default MainNav;