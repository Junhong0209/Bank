import { Link } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import './Welcome.scss';

const Welcome = () => {
  return (
    <>
      <Navbar />
      <div className='intro-main'>
        <div className='intro-main-content'>
          <h3 className='title-main'>카카오뱅크에 오신 것을 환영합니다.</h3>
          <p className='title-sub'>처음 방문하셨다면 회원가입을 먼저 해주세요!</p>
          <ul className='list-signup-signin'>
            <li>
              <Link className='link-signup' to='/signup'>회원가입</Link>
            </li>
            <li>
              <Link className='link-signin' to='/login'>로그인</Link>
            </li>
          </ul>
        </div>
        <div className='background-line'></div>
      </div>
    </>
  );
};

export default Welcome;