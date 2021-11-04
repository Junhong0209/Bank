import { GrFormAdd } from "react-icons/gr"
import { IntroMainTitle, AddAccountForm } from "../Index.style"

const AddAccount = () => {
  return (
    <>
      <IntroMainTitle>계좌 개설하기</IntroMainTitle>
      <AddAccountForm>
        <GrFormAdd size='36' />
      </AddAccountForm>
    </>
  );
};

export default AddAccount;