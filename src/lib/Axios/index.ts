import axios from "axios";

import { SERVER } from "src/config/config";

export const CustomAxios = axios.create({
  baseURL: SERVER,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
  }
})