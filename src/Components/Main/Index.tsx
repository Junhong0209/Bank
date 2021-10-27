import MainNav from "../Nav/MainNav";
import kakaoBank from "../../Image/kakao_bank_img.png";
import './main.scss';

const Main = () => {
  const AddAccount = () => {
    alert('계좌 개설하기 기능을 만들어야 돼요!');
  }

  return (
    <>
      <MainNav />
      <div className='main'>
        <div className='main-content'>
          <div className='main-content-title'>(회원가입 시 설정한 사진)(별명)</div>
          <div className='add-account' onClick={AddAccount}>+</div>
          <div className='account-title'>(별명)(님)의 계좌</div>
          <div className='account-content'>
            <img className='account-content-img' src={kakaoBank} alt='은행 사진' />
            <div className='account-bank-name'>카카오뱅크 (계좌 번호)</div>
            <div className='account-bank-amount'>10,000원</div>
            <div className='account-bank-transfer-background'>
              <a href='/main'>이체</a>
            </div>
            <div className='account-bank-get'>
              <a href='/main'>가져오기</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;