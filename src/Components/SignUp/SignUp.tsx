import Navbar from "src/components/nav/navbar";
import Swal from "sweetalert2";
import axios from "axios";

import { useEffect, useState, useCallback } from "react";
import { ISignUpInput } from "src/types/signUpInput.type";
import { baseURL, header } from "src/config/config";

import {
  SignUpIntroMain,
  SignUpIntroMainContent,
  SignUpMainTitle,
  SignUpInputForm,
  SignUpInputTitle,
  SignUpInputBackground,
  BackgroundLine,
  SubmitButtom,
  AgreeProvision,
  ProvisionModal,
  ModalCloseButton,
  PasswordError,
} from 'src/components/signUp/signUp.style';


const signUp = () => {
  const [inputPhoneValue, setInputPhoneValue] = useState<string>('');
  const [inputBirthValue, setInputBirthValue] = useState<string>('');
  const [passwordChk, setPasswordChk] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [agreeValue, setAgreeValue] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputs, setInputs] = useState<ISignUpInput>({
    name: '',              // User 이름
    id: '',                // User 아이디
    password: '',          // User 비밀번호
    phoneNumber: '',       // User 전화번호
    birth: '',             // User 생일
  });
  const { name, id, password, birth, phoneNumber } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target
    const nextInputs = {
      ...inputs,
      [name]: value,
    }
    setInputs(nextInputs);
  }

  const passwordCheck = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordChk(e.target.value);
  }, [password])

  // 전화번호 입력
  const onInputPhoneNumber = (e) => {
    e.target.value = e.target.value.substr(0, 13);
  }
  const phoneNumberHandlePress = (e) => {
    const regex = /^[0-9\b -]{0,11}$/;
    if (regex.test(e.target.value)) {
      setInputPhoneValue(e.target.value);
    }
    onChange(e);
  }
  useEffect(() => {
    if (inputPhoneValue.length <= 11) {
      setInputPhoneValue(inputPhoneValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [inputPhoneValue]);

  // 생일 입력
  const onInputBirth = (e) => {
    e.target.value = e.target.value.substr(0, 8);
  }
  const birthHanlePress = (e) => {
    const regex = /^[0-9\b -]{0,7}$/;
    if (regex.test(e.target.value)) {
      setInputBirthValue(e.target.value);
    }
    onChange(e);
  }
  useEffect(() => {
    if (inputBirthValue.length <= 7) {
      setInputBirthValue(inputBirthValue.replace(/-/g, '').replace(/(\d{6})(\d{1})/, '$1-$2'));
    }
  }, [inputBirthValue]);

  const SIGNUP = (e) => {
    e.preventDefault();
    if (agreeValue === true && password === passwordChk) {
      const data = new URLSearchParams();
      data.append('id', id);
      data.append('pw', password);
      data.append('phone', phoneNumber);
      data.append('name', name);
      data.append('birth', birth);

      axios.post(`${baseURL}/auth/register`, data, header)
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: '회원가입이 완료 되었습니다.'
        })
      }).catch((error) => {
        if (error.response.data.status === 403) {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: '중복된 계정입니다. 다시 시도해주세요.'
          })
        }
      })
    } else if (password === passwordChk) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: '약관 동의를 먼저 해주세요.'
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: '비밀번호가 일치하지 않습니다.'
      })
    }
  }

  const AgreeCheck = () => {
    setAgreeValue(true);
  }
  const openModal = () => {
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      <Navbar />
      <SignUpIntroMain>
        <BackgroundLine>
          <SignUpIntroMainContent>
            <SignUpMainTitle>회원가입</SignUpMainTitle>
            <form onSubmit={SIGNUP}>
              {/* 이름 입력 */}
              <SignUpInputForm>
                <SignUpInputTitle>이름 (실명)</SignUpInputTitle>
                <SignUpInputBackground>
                  <input
                    name='name'
                    type='text'
                    placeholder='이름을 입력해주세요'
                    className='name'
                    value={name}
                    onChange={onChange}
                  />
                </SignUpInputBackground>
              </SignUpInputForm>
              {/* ID 입력 */}
              <SignUpInputForm>
                <SignUpInputTitle>아이디</SignUpInputTitle>
                <SignUpInputBackground>
                  <input
                    name='id'
                    placeholder='아이디를 입력해주세요'
                    value={id}
                    onChange={onChange}
                  />
                </SignUpInputBackground>
              </SignUpInputForm>
              {/* PW 입력 */}
              <SignUpInputForm>
                <SignUpInputTitle>비밀번호</SignUpInputTitle>
                <SignUpInputBackground>
                  <input
                    name='password'
                    type="password"
                    placeholder='비밀번호를 입력해주세요'
                    value={password}
                    onChange={onChange}
                  />
                </SignUpInputBackground>
              </SignUpInputForm>
              {/* PW 확인 */}
              <SignUpInputForm>
                <SignUpInputTitle>비밀번호 확인</SignUpInputTitle>
                <SignUpInputBackground>
                  <input 
                    name='passwordchk' 
                    type='password' 
                    placeholder='비밀번호를 다시 입력해주세요.' 
                    value={passwordChk}
                    onChange={passwordCheck}
                  />
                </SignUpInputBackground>
              </SignUpInputForm>
              <>
                {
                  passwordError && <PasswordError>* 비밀번호가 일치하지 않습니다.</PasswordError>
                }
              </>
              {/* 전화번호 입력 */}
              <SignUpInputForm>
                <SignUpInputTitle>전화번호</SignUpInputTitle>
                <SignUpInputBackground>
                  <input
                    name='phoneNumber'
                    type='text'
                    placeholder='전화번호를 입력해주세요'
                    onChange={phoneNumberHandlePress}
                    value={inputPhoneValue}
                    onInput={onInputPhoneNumber}
                  />
                </SignUpInputBackground>
              </SignUpInputForm>
              {/* 생일 입력 */}
              <SignUpInputForm>
                <SignUpInputTitle>생년월일</SignUpInputTitle>
                <SignUpInputBackground>
                  <input
                    name='birth'
                    type='text'
                    placeholder='생년월일(숫자 7자리)을 입력해주세요'
                    value={inputBirthValue}
                    onChange={birthHanlePress}
                    onInput={onInputBirth}
                  />
                </SignUpInputBackground>
              </SignUpInputForm>
              {/* 약관 동의 */}
              <SignUpInputForm>
                <input onClick={AgreeCheck} type='checkbox' id='cb1' />
                <label htmlFor='cb1' />
                <AgreeProvision onClick={openModal}>약관동의</AgreeProvision>
                <ProvisionModal isOpen={isOpen} onRequestClose={closeModal}>
                  <h2>약관안내</h2>
                  <div>
                    DGSW Kakao Bank 서비스에서는 사용자의 주민등록번호 7자리 및 휴대전화번호, 이름을 수집하고 있습니다.
                    해당 정보는 서비스를 위해 잘 쓰일 것이니 미리 감사 인사드립니다. 항상 감사합니다.
                    DGSW Kakao Bank 서비스에서는 사용자의 주민등록번호 7자리 및 휴대전화번호, 이름을 수집하고 있습니다.
                    해당 정보는 서비스를 위해 잘 쓰일 것이니 미리 감사 인사드립니다. 항상 감사합니다.
                    DGSW Kakao Bank 서비스에서는 사용자의 주민등록번호 7자리 및 휴대전화번호, 이름을 수집하고 있습니다.
                    해당 정보는 서비스를 위해 잘 쓰일 것이니 미리 감사 인사드립니다. 항상 감사합니다.
                  </div>
                  <ModalCloseButton onClick={closeModal}>확인</ModalCloseButton>
                </ProvisionModal>
              </SignUpInputForm>
              <SubmitButtom type='submit' value='회원 가입' />
            </form>
          </SignUpIntroMainContent>
        </BackgroundLine>
      </SignUpIntroMain>
    </>
  );
};

export default signUp;