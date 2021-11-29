import { CustomAxios } from "src/lib/Axios";

export const handleRegister = async (req: object) => {
  const url: string = '/auth/register';
  const { data } = await CustomAxios.post(url, req);

  return data;
}

export const handleLogin = async (req: object) => {
  const url: string = '/auth/login';
  const { data } = await CustomAxios.post(url, req);

  return data;
}

export const getUserInfo = async () => {
  const url: string = '/user/my';
  const { data } = await CustomAxios.get(url);

  return data;
}