import { CustomAxios } from "src/lib/Axios";

export const handleRegister = async (req: object) => {
  const url: string = '/auth/register';
  const { data } = await CustomAxios.post(url, req);

  return data;
}