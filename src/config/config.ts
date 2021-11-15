export const baseURL: string = 'http://34.64.165.105:8080';

export const header: object = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export const PostHeader: object = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': sessionStorage.getItem('token')
  }
}