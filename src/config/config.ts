export const SERVER: string = 'http://34.64.165.105:8080';

export const HEADERS: object = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${sessionStorage.getItem('access-token')}`
  }
}