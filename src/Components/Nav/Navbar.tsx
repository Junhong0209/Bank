import Logo from '../../assets/Image/logo.svg';

import {
  KakaoHead,
  NavGlobal,
  NavContent,
  NavItems,
  NavLogo,
  KakaoLogo,
  KakaoLogoImg
} from './Nav.style';

const Navbar = () => {

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

export default Navbar;