import axios from "axios";
import { useState } from "react";
import { baseURL, header } from "src/api/Bank";
import { LoginInput } from "src/types/LoginInput.type";
import Swal from "sweetalert2";

import Navbar from "../Nav/Navbar";

import {
  LoginMain,
  LoginMainContet,
  LoginMainTitle,
  LoginInputTitle,
  LoginInputBackground,
  LoginInputForm,
  LoginButton,
  BackgroundLine
} from './SignIn.style';

const SignIn = ({ history }) => {
  const [inputs, setInputs] = useState<LoginInput>({
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

    axios.post(`${baseURL}/auth/login`, data, header)
    .then((res) => {
      sessionStorage.setItem('token', res.data.data.token);
      history.push('/main');
    }).catch((error) => {
      if (error.response.data.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'ID 또는 PW가 일치하지 않습니다.'
        })
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