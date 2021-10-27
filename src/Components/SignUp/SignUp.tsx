import { useEffect, useState } from "react";
import Navbar from "../Nav/Navbar";
import "./SignUp.scss";

const SignUp = () => {
  const [inputPhoneValue, setInputPhoneValue] = useState('');
  const [inputBirthValue, setInputBirthValue] = useState('');
  const [agreeValue, setAgreeValue] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',                        // User Name
    id: '',                          // User ID
    password: '',                    // User Password
    phoneNumber: '',  // User 주민 등록 
    birth: '',
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

  useEffect(() => {
    console.log(inputs);
  }, [inputs])

  const signup = () => {
    if (agreeValue === true) {
      alert(`${id}, ${name}, ${password}, ${phoneNumber}, ${birth}`);
    } else {
      alert('약관 동의를 먼저 해주세요');
    }
  }

  const AgreeCheck = () => {
    setAgreeValue(true);
  }

  return (
    <>
      <Navbar />
      <div className='signup-main'>
        <div className='signup-main-content'>
          <h1 className='signup-main-title'>회원가입</h1>
          <form onSubmit={signup}>
            {/* 이름 입력 */}
            <div className='input-form'>
              <div className='input-title'>이름 (실명)</div>
              <div className='input-background'>
                <input
                  name='name'
                  type='text'
                  placeholder='이름을 입력해주세요'
                  className='name'
                  value={name}
                  onChange={onChange}
                />
              </div>
            </div>
            {/* ID 입력 */}
            <div className='input-form'>
              <div className='input-title'>아이디</div>
              <div className='input-background'>
                <input
                  name='id'
                  placeholder='아이디를 입력해주세요'
                  value={id}
                  onChange={onChange}
                />
              </div>
            </div>
            {/* PW 입력 */}
            <div className='input-form'>
              <div className='input-title'>비밀번호</div>
              <div className='input-background'>
                <input
                  name='password'
                  type="password"
                  placeholder='비밀번호를 입력해주세요'
                  value={password}
                  onChange={onChange}
                />
              </div>
            </div>
            {/* 전화번호 입력 */}
            <div className='input-form'>
              <div className='input-title'>전화번호</div>
              <div className='input-background'>
                <input
                  name='phoneNumber'
                  type='text'
                  placeholder='전화번호를 입력해주세요'
                  onChange={phoneNumberHandlePress}
                  value={inputPhoneValue}
                  onInput={onInputPhoneNumber}
                />
              </div>
            </div>
            {/* 생일 입력 */}
            <div className='input-form'>
              <div className='input-title'>생년월일</div>
              <div className='input-background'>
                <input
                  name='birth'
                  type='text'
                  placeholder='생년월일(숫자 7자리)을 입력해주세요'
                  value={inputBirthValue}
                  onChange={birthHanlePress}
                  onInput={onInputBirth}
                />
              </div>
            </div>
            {/* 약관 동의 */}
            <div className='input-form'>
              <input onClick={AgreeCheck} type='checkbox' id='cb1' />
              <label htmlFor='cb1' />
              <a href='/' target='_blank' style={Agree}>약관동의</a>
            </div>
            <input type='submit' className='submit-button' value='회원 가입' />
          </form>
        </div>
        <div className='background-line'></div>
      </div>
    </>
  );
};

const Agree = {
  positon: 'absolute',
  marginLeft: '2vw',
  marginBottom: '1vw',
  color: 'black'
};

export default SignUp;