export interface ILoginInput {
  id: string,
  password: string
}

export interface ILoginPost {
  id: string,
  pw: string
}

export interface IRegisterInput {
  name: string,
  id: string,
  password: string,
  phoneNumber: string,
  birth: string
}

export interface IRegisterPost {
  name: string,
  id: string,
  pw: string,
  phone: string,
  birth: string
}