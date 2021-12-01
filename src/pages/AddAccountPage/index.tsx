import AddAccount from "src/components/AddMyAccount/addAccount"
import MainNav from "src/components/Nav/mainNav";

const AddAccountPage = ({ history }) => {
  return (
    <>
      <MainNav />
      <AddAccount history={history} />
    </>
  );
};

export default AddAccountPage;