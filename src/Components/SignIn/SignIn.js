import { useState } from "react";
import Navbar from "../Nav/Navbar";
import './SignIn.scss';

const SignIn = () => {
  const [inputs, setInputs] = useState({
    id: '',          // User ID
    password: ''     // user Password
  });

  const { id, password } = inputs

  const onChange = (e) => {
    const [ name, value ] = e.target;

    const nextInputs = {
      ...inputs,
      [name]: value,
    };
    setInputs(nextInputs);
  }

  return (
    <>
      <Navbar />
      <div className='login-main'>
        <div className='login-main-content'>
          <h1 className='login-main-title'>로그인</h1>

          {/* ID 입력 */}
          <div className='input-form'>
            <div className='input-title'>아이디</div>
            <input
              name='id'
              placeholder='ID' 
              value={id} 
              onChange={onChange}
            />
          </div>

          {/* Password 입력 */}
          <div className='input-form'>
            <div className='input-title'>비밀번호</div>
            <input 
              name='password' 
              placeholder='PASSWORD' 
              value={password} 
              onChange={onChange}
            />
          </div>

          <button className='login-button' type='submit'>로그인</button>
        </div>
        <div className='background-line' />
      </div>
    </>
  );
};

export default SignIn;