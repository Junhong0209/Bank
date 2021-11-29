import Logo from 'src/assets/Image/logo.svg';

import * as S from 'src/components/Nav/nav.style';

const Navbar = () => {

  return (
    <S.KakaoHead className='static'>
      <S.NavGlobal>
        <S.NavContent>
          <S.NavItems>
            <S.NavLogo>
              <S.KakaoLogo href='/'><S.KakaoLogoImg src={Logo} alt='kakaobank' /></S.KakaoLogo>
            </S.NavLogo>
          </S.NavItems>
        </S.NavContent>
      </S.NavGlobal>
    </S.KakaoHead>
  );
}

export default Navbar;