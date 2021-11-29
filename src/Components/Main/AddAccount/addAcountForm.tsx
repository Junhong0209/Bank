import { GrFormAdd } from "react-icons/gr"
import { IntroMainTitle, AddAccountForm } from "src/components/main/index.style";

const addAccount = ({ history }) => {
  const addAccountPage = () => {
    history.push('/addAccount');
  }

  return (
    <>
      <IntroMainTitle>계좌 개설하기</IntroMainTitle>
      <AddAccountForm onClick={addAccountPage}>
        <GrFormAdd size='36' />
      </AddAccountForm>
    </>
  );
};

export default addAccount;