import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RegisterInput } from '../pages/board.add.page';
import customFetchBase from './customFetchBase';
import { GenericResponse,  IResetPasswordRequest } from '../types/types';

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;
// input -> boardInput
export const boardApi = createApi({
    reducerPath: 'boardApi',
    baseQuery: customFetchBase,
    endpoints: (builder) => ({
      registerBoard: builder.mutation<GenericResponse, RegisterInput>({
        query(data) {
          return {
            url: 'api/board',
            method: 'POST',
            body: data,
          };
        },
      }),   
    }),
  });
  
  export const {    
    useRegisterBoardMutation,

  } = boardApi;