import { CustomAxios } from "src/lib/Axios";

export const handleLogin = async (req: object) => {
  const url: string = '/auth/login';
  const { data } = await CustomAxios.post(url, req);

  return data;
}