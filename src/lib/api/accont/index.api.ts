import { CustomAxios } from "src/lib/Axios"

export const handleOpenAccount = async (req: object) => {
  const url: string = '/account';
  const { data } = await CustomAxios.post(url, req);

  return data;
}

export const handleGetMyAccount = async () => {
  const url: string = '/account/find/my';
  const { data } = await CustomAxios.get(url);

  return data;
}

export const handleSendAccount = async (req: object) => {
  const url: string = '/remittance/send';
  const { data } = await CustomAxios.post(url, req);

  return data;
}