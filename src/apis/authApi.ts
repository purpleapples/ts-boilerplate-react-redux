import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RegisterInput } from '../pages/register.page'
import customFetchBase from './customFetchBase';
import { GenericResponse,  IResetPasswordRequest } from '../types/types';
import { LoginInput } from '../pages/login.page';

import { accountApi } from './accountApi';
const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: customFetchBase,
    endpoints: (builder) => ({
      registerUser: builder.mutation<GenericResponse, RegisterInput>({
        query(data) {
          return {
            url: 'auth/register',
            method: 'POST',
            body: data,
          };
        },
      }),
      loginUser: builder.mutation<{ access_token: string; status: string }, LoginInput>({
          query(data) {
          return {
            url: 'auth/login',
            method: 'POST',
            body: data,
            credentials: 'include',
          };
        },
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          try {
            await queryFulfilled;
            await dispatch(accountApi.endpoints.getMe.initiate(null));
          } catch (error) {}
        },
      }),
      logoutUser: builder.mutation<void, void>({
        query() {
          return {
            url: 'auth/logout',
            credentials: 'include',
          };
        },
      }),
      verifyEmail: builder.mutation<GenericResponse, string>({
        query(verificationCode) {
          return {
            url: `auth/verifyemail/${verificationCode}`,
            credentials: 'include',
          };
        },
      }),
      forgotPassword: builder.mutation<GenericResponse, { email: string }>({
        query(body) {
          return {
            url: `auth/forgotpassword`,
            method: 'POST',
            credentials: 'include',
            body,
          };
        },
      }),
      resetPassword: builder.mutation<GenericResponse, IResetPasswordRequest>({
        query({ resetToken, password, passwordConfirm }) {
          return {
            url: `auth/resetpassword/${resetToken}`,
            method: 'PATCH',
            body: { password, passwordConfirm },
            credentials: 'include',
          };
        },
      }),
    }),
  });
  
  export const {
    useLoginUserMutation,
    useRegisterUserMutation,
    useLogoutUserMutation,
    useVerifyEmailMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
  } = authApi;