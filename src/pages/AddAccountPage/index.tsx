import AddAccount from "src/components/AddAccount/addAccount"
import Navbar from "src/components/Nav/navbar"

const AddAccountPage = ({ history }) => {
  return (
    <>
      <Navbar />
      <AddAccount history={history} />
    </>
  );
};

export default AddAccountPage;