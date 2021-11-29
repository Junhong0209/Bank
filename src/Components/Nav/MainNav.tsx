import Logo from 'src/assets/Image/logo.svg';

import { GrUserSettings } from 'react-icons/gr'

import * as S from 'src/components/Nav/nav.style';

const mainNav = () => {

  return (
    <S.KakaoHead className='static'>
      <S.NavGlobal>
        <S.NavContent>
          <S.NavItems>
            <S.NavLogo>
              <S.KakaoLogo href='/'><S.KakaoLogoImg src={Logo} alt='kakaobank' /></S.KakaoLogo>
            </S.NavLogo>
            <S.NavItem to='/addAccount' title='계좌 개설하기'>
              계좌 개설
            </S.NavItem>
            <S.NavItem>
              계좌 추가
            </S.NavItem>
            <S.NavItem>
              <GrUserSettings />
            </S.NavItem>
          </S.NavItems>
        </S.NavContent>
      </S.NavGlobal>
    </S.KakaoHead>
  );
}

export default mainNav;