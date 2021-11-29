import {
  IntroMain,
  IntroMainContent,
  TitleMain,
  TitleSub,
  ListSignupSignin,
  SignUpLink,
  SignInLink,
  BackgroundLine
} from 'src/components/Welcome/index.style';

const Welcome = () => {
  return (
    <IntroMain>
      <IntroMainContent>
        <TitleMain>카카오뱅크에 오신 것을 환영합니다.</TitleMain>
        <TitleSub>처음 방문하셨다면 회원가입을 먼저 해주세요!</TitleSub>
        <ListSignupSignin>
          <li>
            <SignInLink to='/login'>로그인</SignInLink>
          </li>
          <li>
            <SignUpLink to='/signup'>회원가입</SignUpLink>
          </li>
        </ListSignupSignin>
      </IntroMainContent>
      <BackgroundLine />
    </IntroMain>
  );
};

export default Welcome;