import { CustomAxios } from "src/lib/Axios"

export const handleOpenAccount = async (req: object) => {
  const url: string = '/account'
  const { data } = await CustomAxios.post(url, req);

  return data;
}