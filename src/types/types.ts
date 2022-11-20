  export interface IGenericResponse {
    status: string;
    message: string;
  }
  export interface GenericResponse {
    status: string;
    message: string;
  }
  
  export interface IResetPasswordRequest {
    resetToken: string;
    password?: string;
    passwordConfirm?: string;
  }
  
  
  export interface IAccount {
    name: string;
    email: string;
    role: string;
    photo: string;
    _id: string;
    id: string;
    created_at: string;
    updated_at: string;
    __v: number;
  }
  
  export interface IPostResponse {
    id: string;
    title: string;
    content: string;
    image: string;
    category: string;
    user: IAccount;
    created_at: string;
    updated_at: string;
  }