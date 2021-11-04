import Navbar from '../Nav/Navbar';

import {
  IntroMain,
  IntroMainContent,
  TitleMain,
  TitleSub,
  ListSignupSignin,
  SignUpLink,
  SignInLink,
  BackgroundLine
} from './Welcome.style';

const Welcome = () => {
  return (
    <>
      <Navbar />
      <IntroMain>
        <IntroMainContent>
          <TitleMain>카카오뱅크에 오신 것을 환영합니다.</TitleMain>
          <TitleSub>처음 방문하셨다면 회원가입을 먼저 해주세요!</TitleSub>
          <ListSignupSignin>
            <li>
              <SignUpLink to='/signup'>회원가입</SignUpLink>
            </li>
            <li>
              <SignInLink to='/login'>로그인</SignInLink>
            </li>
          </ListSignupSignin>
        </IntroMainContent>
        <BackgroundLine />
      </IntroMain>
    </>
  );
};

export default Welcome;