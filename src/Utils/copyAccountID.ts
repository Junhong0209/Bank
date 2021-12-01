import { ErrorToast, SuccsessToast } from "src/lib/SweetAlert";

const copyAccountID = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    SuccsessToast('계좌번호가 복사 되었습니다!');
  } catch (error) {
    ErrorToast('계좌번호가 복사 되지않았습니다.');
  }
}

export default copyAccountID;