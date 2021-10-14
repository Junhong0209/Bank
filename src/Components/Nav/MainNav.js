import Logo from '../../Image/logo.svg';
import './Navbar.scss';

const MainNav = () => {

  return (
    <div id='kakaoHead' className='static'>
      <div className='nav-global'>
        <div className='nav-content'>
          <ul className='nav-items'>
            <li className='nav-logo'>
              <a className='logo-default' href='/main'> <img src={Logo} alt='kakaobank' className='logo-img' /> </a>
            </li>
            <li className='nav-item'>
              계좌 개설
            </li>
            <li className='nav-item'>
              계좌 추가
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainNav;