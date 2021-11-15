import Logo from 'src/assets/Image/logo.svg';

import {
  KakaoHead,
  NavGlobal,
  NavContent,
  NavItems,
  NavLogo,
  KakaoLogo,
  KakaoLogoImg
} from 'src/components/nav/Nav.style';

const navbar = () => {

  return (
    <KakaoHead className='static'>
      <NavGlobal>
        <NavContent>
          <NavItems>
            <NavLogo>
              <KakaoLogo href='/'><KakaoLogoImg src={Logo} alt='kakaobank' /></KakaoLogo>
            </NavLogo>
          </NavItems>
        </NavContent>
      </NavGlobal>
    </KakaoHead>
  );
}

export default navbar;