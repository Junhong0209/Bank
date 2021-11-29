import { IRegisterInput, IRegisterPost } from "src/types/auth/index.type";
import { handleRegister } from "src/lib/api/auth/index.api";
import { errorSwal, succsessSwal } from "src/lib/SweetAlert/alert";
import { useState, useCallback, useEffect } from "react";

import * as S from 'src/components/Register/index.style';

const Register = () => {
  const [inputPhoneValue, setInputPhoneValue] = useState<string>('');
  const [inputBirthValue, setInputBirthValue] = useState<string>('');
  const [passwordChk, setPasswordChk] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [agreeValue, setAgreeValue] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputs, setInputs] = useState<IRegisterInput>({
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
      const data: IRegisterPost = {
        'id': id,
        'pw': password,
        'phone': phoneNumber,
        'name': name,
        'birth': birth
      }

      handleRegister(data).then((res) => {
        succsessSwal('회원가입이 완료 되었습니다.');
      }).catch((error) => {
        if (error.response.data.status === 403) {
          errorSwal('중복된 계정입니다. 다시 시도해주세요.');
        }
      })
    } else if (password === passwordChk) {
      errorSwal('약관 동의를 먼저 해주세요.');
    } else {
      errorSwal('비밀번호가 일치하지 않습니다.');
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
      <S.SignUpIntroMain>
        <S.BackgroundLine>
          <S.SignUpIntroMainContent>
            <S.SignUpMainTitle>회원가입</S.SignUpMainTitle>
            <form onSubmit={SIGNUP}>
              {/* 이름 입력 */}
              <S.SignUpInputForm>
                <S.SignUpInputTitle>이름 (실명)</S.SignUpInputTitle>
                <S.SignUpInputBackground>
                  <input
                    name='name'
                    type='text'
                    placeholder='이름을 입력해주세요'
                    className='name'
                    value={name}
                    onChange={onChange}
                  />
                </S.SignUpInputBackground>
              </S.SignUpInputForm>
              {/* ID 입력 */}
              <S.SignUpInputForm>
                <S.SignUpInputTitle>아이디</S.SignUpInputTitle>
                <S.SignUpInputBackground>
                  <input
                    name='id'
                    placeholder='아이디를 입력해주세요'
                    value={id}
                    onChange={onChange}
                  />
                </S.SignUpInputBackground>
              </S.SignUpInputForm>
              {/* PW 입력 */}
              <S.SignUpInputForm>
                <S.SignUpInputTitle>비밀번호</S.SignUpInputTitle>
                <S.SignUpInputBackground>
                  <input
                    name='password'
                    type="password"
                    placeholder='비밀번호를 입력해주세요'
                    value={password}
                    onChange={onChange}
                  />
                </S.SignUpInputBackground>
              </S.SignUpInputForm>
              {/* PW 확인 */}
              <S.SignUpInputForm>
                <S.SignUpInputTitle>비밀번호 확인</S.SignUpInputTitle>
                <S.SignUpInputBackground>
                  <input 
                    name='passwordchk' 
                    type='password' 
                    placeholder='비밀번호를 다시 입력해주세요.' 
                    value={passwordChk}
                    onChange={passwordCheck}
                  />
                </S.SignUpInputBackground>
              </S.SignUpInputForm>
              <>
                {
                  passwordError && <S.PasswordError>* 비밀번호가 일치하지 않습니다.</S.PasswordError>
                }
              </>
              {/* 전화번호 입력 */}
              <S.SignUpInputForm>
                <S.SignUpInputTitle>전화번호</S.SignUpInputTitle>
                <S.SignUpInputBackground>
                  <input
                    name='phoneNumber'
                    type='text'
                    placeholder='전화번호를 입력해주세요'
                    onChange={phoneNumberHandlePress}
                    value={inputPhoneValue}
                    onInput={onInputPhoneNumber}
                  />
                </S.SignUpInputBackground>
              </S.SignUpInputForm>
              {/* 생일 입력 */}
              <S.SignUpInputForm>
                <S.SignUpInputTitle>생년월일</S.SignUpInputTitle>
                <S.SignUpInputBackground>
                  <input
                    name='birth'
                    type='text'
                    placeholder='생년월일(숫자 7자리)을 입력해주세요'
                    value={inputBirthValue}
                    onChange={birthHanlePress}
                    onInput={onInputBirth}
                  />
                </S.SignUpInputBackground>
              </S.SignUpInputForm>
              {/* 약관 동의 */}
              <S.SignUpInputForm>
                <input onClick={AgreeCheck} type='checkbox' id='cb1' />
                <label htmlFor='cb1' />
                <S.AgreeProvision onClick={openModal}>약관동의</S.AgreeProvision>
                <S.ProvisionModal isOpen={isOpen} onRequestClose={closeModal}>
                  <h2>약관안내</h2>
                  <div>
                    DGSW Kakao Bank 서비스에서는 사용자의 주민등록번호 7자리 및 휴대전화번호, 이름을 수집하고 있습니다.
                    해당 정보는 서비스를 위해 잘 쓰일 것이니 미리 감사 인사드립니다. 항상 감사합니다.
                    DGSW Kakao Bank 서비스에서는 사용자의 주민등록번호 7자리 및 휴대전화번호, 이름을 수집하고 있습니다.
                    해당 정보는 서비스를 위해 잘 쓰일 것이니 미리 감사 인사드립니다. 항상 감사합니다.
                    DGSW Kakao Bank 서비스에서는 사용자의 주민등록번호 7자리 및 휴대전화번호, 이름을 수집하고 있습니다.
                    해당 정보는 서비스를 위해 잘 쓰일 것이니 미리 감사 인사드립니다. 항상 감사합니다.
                  </div>
                  <S.ModalCloseButton onClick={closeModal}>확인</S.ModalCloseButton>
                </S.ProvisionModal>
              </S.SignUpInputForm>
              <S.SubmitButtom type='submit' value='회원 가입' />
            </form>
          </S.SignUpIntroMainContent>
        </S.BackgroundLine>
      </S.SignUpIntroMain>
    </>
  );
};

export default Register;