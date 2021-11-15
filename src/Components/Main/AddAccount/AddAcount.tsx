import { GrFormAdd } from "react-icons/gr"
import { IntroMainTitle, AddAccountForm } from "src/components/main/index.style";

const addAccount = () => {
  return (
    <>
      <IntroMainTitle>계좌 개설하기</IntroMainTitle>
      <AddAccountForm>
        <GrFormAdd size='36' />
      </AddAccountForm>
    </>
  );
};

export default addAccount;