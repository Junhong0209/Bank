import { useState } from "react";
import { errorSwal } from "src/lib/SweetAlert/alert";
import { ILoginInput, ILoginPost } from "src/types/auth/index.type";
import { handleLogin } from "src/lib/api/auth/index.api";

import * as S from 'src/components/Login/index.style';

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

    const data: ILoginPost = {
      'id': id,
      'pw': password
    }

    handleLogin(data).then((res) => {
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
      <S.LoginMain>
        <S.BackgroundLine>
          <S.LoginMainContet>
            <S.LoginMainTitle>로그인</S.LoginMainTitle>
            <form onSubmit={LOGIN}>
              <S.LoginInputForm>
                <S.LoginInputTitle>아이디</S.LoginInputTitle>
                <S.LoginInputBackground>
                  <input 
                    type='text'
                    name='id'
                    placeholder='아이디를 입력하세요.' 
                    value={id} 
                    onChange={onChange} 
                  />
                </S.LoginInputBackground>
              </S.LoginInputForm>
              <S.LoginInputForm>
                <S.LoginInputTitle>비밀번호</S.LoginInputTitle>
                <S.LoginInputBackground>
                  <input 
                    type='password'
                    name='password'
                    placeholder='비밀번호를 입력하세요.' 
                    value={password} 
                    onChange={onChange} 
                  />
                </S.LoginInputBackground>
              </S.LoginInputForm>
              <S.LoginButton type='submit'>로그인</S.LoginButton>
            </form>
          </S.LoginMainContet>
        </S.BackgroundLine>
      </S.LoginMain>
    </>
  );
};

export default SignIn;