import * as S from 'src/components/Welcome/index.style';

const Welcome = () => {
  return (
    <S.IntroMain>
      <S.IntroMainContent>
        <S.TitleMain>카카오뱅크에 오신 것을 환영합니다.</S.TitleMain>
        <S.TitleSub>처음 방문하셨다면 회원가입을 먼저 해주세요!</S.TitleSub>
        <S.ListSignupSignin>
          <li>
            <S.SignInLink to='/login'>로그인</S.SignInLink>
          </li>
          <li>
            <S.SignUpLink to='/signup'>회원가입</S.SignUpLink>
          </li>
        </S.ListSignupSignin>
      </S.IntroMainContent>
      <S.BackgroundLine />
    </S.IntroMain>
  );
};

export default Welcome;