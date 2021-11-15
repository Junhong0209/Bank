import Logo from 'src/assets/Image/logo.svg';

import { GrUserSettings } from 'react-icons/gr'

import {
  KakaoHead,
  NavGlobal,
  NavContent,
  NavItems,
  NavItem,
  NavLogo,
  KakaoLogo,
  KakaoLogoImg
} from 'src/components/nav/nav.style';

const mainNav = () => {

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

export default mainNav;