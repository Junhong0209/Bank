import { useEffect, useState } from "react";
import Navbar from "../Nav/Navbar";
import "./SignUp.scss";

const SignUp = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputs, setInputs] = useState({
    name: '',                        // User Name
    id: '',                          // User ID
    password: '',                    // User Password
    email: '',                       // User E-mail
    residentRegistrationNumber: '',  // User 주민 등록 번호
    nickName: '',                    // User 별명
  });
  const { name, id, password, email, nickName } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target

    const nextInputs = {
      ...inputs,
      [name]: value,
    }
    setInputs(nextInputs);
  }

  const handlePress = (e) => {
    const regex = /^[0-9\b -]{0,7}$/;
    if (regex.test(e.target.value)) {
      setInputValue(e.target.value);
    }
    onChange(e);
  }

  useEffect(() => {
    if (inputValue.length === 7) {
      setInputValue(inputValue.replace(/(\d{6})(\d{1})/, '$1-$2'));
      console.log(inputValue);
    }
  }, [inputValue]);

  useEffect(() => {
    console.log(inputs);
  }, [inputs])

  return (
    <div>
      <Navbar />
      <div className='signup-main'>
        <div className='signup-main-content'>
          <h1 className='signup-main-title'>회원가입</h1>

          {/* ID 입력 */}
          <div className='input-form'>
            <div className='input-title'>아이디</div>
              <input 
                name='id' 
                placeholder='ID' 
                className='input-tag' 
                value={id} 
                onChange={onChange}
              />
            <button className='duplicate-check' type='button'>중복 확인</button> <br />
          </div>

          {/* PW 입력 */}
          <div className='input-form'>
            <div className='input-title'>비밀번호</div>
            <input 
              name='password' 
              placeholder='PASSWORD' 
              className='input-tag' 
              value={password} 
              onChange={onChange}
            /> <br />
          </div>

          {/* e-mail 입력 */}
          <div className='input-form'>
            <div className='input-title'>이메일</div>
            <input 
              name='email' 
              placeholder='E-Mail' 
              className='input-tag' 
              value={email} 
              onChange={onChange}
            /> <br />
          </div>

          {/* 주민등록번호 입력 */}
          <div className='input-form'>
            <div className='input-title'>주민등록번호</div>
            <input 
              name='residentRegistrationNumber' 
              type='text' 
              onChange={handlePress} 
              value={inputValue} 
              className='input-tag'
            /> <br />
            <div className='explanation'>(주민등록번호 ******-* 까지)</div>
          </div>

          {/* 이름 입력 */}
          <div className='input-form'>
            <div className='input-title'>이름 (실명)</div>
            <input 
              name='name' 
              type='text'
              className='name' 
              value={name} 
              onChange={onChange}
            /> <br />
          </div>

          {/* 별명 입력 */}
          <div className='input-form'>
            <div className='input-title'>별명</div>
            <input 
              name='nickName' 
              type='text' 
              className='input-tag' 
              value={nickName} 
              onChange={onChange}
            />
            <button className='duplicate-check' type='button'>중복 확인</button> <br />
          </div>

          {/* 사진 선택 */}
          <div className='input-form'>
            <span className='input-title'>프로필 사진</span>
            <label className='select-img' for='input-img'><div className='select-profile-img'> 사진 선택</div></label>
            <input id='input-img' type='file' accept='image/*' /> <br /><br />
          </div>

          {/* 약관 동의 */}
          <div className='input-form'>
            <input type='checkbox' id='cb1' />
            <label for='cb1' />
            <a href='#' target='_blank' style={agree}>약관동의</a>
          </div>

          <input type='submit' className='submit-button' value='회원 가입' />
        </div>
        <div className='background-line'></div>
      </div>
    </div>
  );
};

const agree = {
  positon: 'absolute',
  marginLeft: '2vw',
  marginBottom: '1vw',
  color: 'black'
};

export default SignUp;