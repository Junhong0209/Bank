import Navbar from "../Nav/Navbar";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <div className='login-main'>
        <div className='login-main-content'>
          <h1 className='login-main-title'>회원가입</h1>
          <div className='input-form'>
            <div className='input-title'>아이디</div>
            <input placeholder='ID' className='input-tag' />
            <button className='duplicate-check' type='submit'>중복 확인</button> <br />
          </div>
          <div className='input-form'>
            <div className='input-title'>비밀번호</div>
            <input placeholder='PASSWORD' className='input-tag' /> <br />
          </div>
        </div>
        <div className='background-line'></div>
      </div>
    </div>
  );
};

export default SignUp;