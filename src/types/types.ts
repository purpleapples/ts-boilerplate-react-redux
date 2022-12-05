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
export interface ItableRowstatus {
    pk:number;
    obj: object | null;
  }

export interface ItableData {
    data: object[]|null;
    columnsInfo: object[]|null;
    visiableAttributes: Array<ItableRowstatus>|null;
    hiddenAttributes: object[]|null;    
    page:Number;
    isInput:boolean;
}
export interface ItableColumn {
  text:string;
  index:number;
  url:string|null;
  type:string|null;
  max_length:number;

}
