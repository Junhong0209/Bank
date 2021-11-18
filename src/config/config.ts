export const baseURL: string = 'http://34.64.165.105:8080';

export const header: object = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Authorization': `Bearer ${sessionStorage.getItem('access-token')}`
  }
}