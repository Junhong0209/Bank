import './Main.scss';

const Main = () => {
  return (
    <div className='intro-main'>
      <div className='intro-main-content'>
        <h3 className='title-main'>카카오뱅크에 오신 것을 환영합니다.</h3>
        <p className='title-sub'>처음 방문하셨다면 회원가입을 먼저 해주세요!</p>
        <ul className='list-signup-signin'>
          <li>
            <a className='link-signup'>회원 가입</a>
          </li>
          <li>
            <a className='link-signin'>로그인</a>
          </li>
        </ul>
      </div>
      <div className='background-line'></div>
    </div>
  );
};

export default Main;