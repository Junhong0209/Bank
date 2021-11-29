import Navbar from "src/components/Nav/navbar";

import { useState } from "react";
import { errorSwal } from "src/lib/SweetAlert/alert";
import { ILoginInput } from "src/types/auth/loginInput.type";
import { handleLogin } from "src/lib/api/auth/login.api";

import {
  LoginMain,
  LoginMainContet,
  LoginMainTitle,
  LoginInputTitle,
  LoginInputBackground,
  LoginInputForm,
  LoginButton,
  BackgroundLine
} from 'src/components/Login/index.style';

const SignIn = ({ history }) => {
  const [inputs, setInputs] = useState<ILoginInput>({
    id: '',          // User ID
    password: ''     // user Password
  });

  const { id, password } = inputs

  const onChange = (e) => {
    const { name, value } = e.target;

    const nextInputs = {
      ...inputs,
      [name]: value,
    };
    setInputs(nextInputs);
  }

  const LOGIN = (e) => {
    e.preventDefault();

    const data = new URLSearchParams();
    data.append('id', id);
    data.append('pw', password);

    const response = handleLogin(data);
    response.then((res) => {
      sessionStorage.setItem('access_token', res.data.token);
      sessionStorage.setItem('refresh_token', res.data.refreshToken);
      history.push('/main');
    }).catch((error) => {
      if (error.response.data.status === 401) {
        errorSwal('ID 또는 PW가 일치하지 않습니다.');
      }
    })
  }

  return (
    <>
      <Navbar />
      <LoginMain>
        <BackgroundLine>
          <LoginMainContet>
            <LoginMainTitle>로그인</LoginMainTitle>
            <form onSubmit={LOGIN}>
              <LoginInputForm>
                <LoginInputTitle>아이디</LoginInputTitle>
                <LoginInputBackground>
                  <input 
                    type='text'
                    name='id'
                    placeholder='아이디를 입력하세요.' 
                    value={id} 
                    onChange={onChange} 
                  />
                </LoginInputBackground>
              </LoginInputForm>
              <LoginInputForm>
                <LoginInputTitle>비밀번호</LoginInputTitle>
                <LoginInputBackground>
                  <input 
                    type='password'
                    name='password'
                    placeholder='비밀번호를 입력하세요.' 
                    value={password} 
                    onChange={onChange} 
                  />
                </LoginInputBackground>
              </LoginInputForm>
              <LoginButton type='submit'>로그인</LoginButton>
            </form>
          </LoginMainContet>
        </BackgroundLine>
      </LoginMain>
    </>
  );
};

export default SignIn;