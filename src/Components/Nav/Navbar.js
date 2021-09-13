import Logo from '../../Image/logo.svg';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div id='kakaoHead' className='static'>
      <div className='nav-global'>
        <div className='nav-content'>
          <ul className='nav-items'>
            <li className='nav-logo'>
              <a className='logo-default' href='/'> <img src={Logo} alt='kakaobank' className='logo-img' /> </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;