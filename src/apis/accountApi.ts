import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser } from '../features/account/AccountSlice';
import { IAccount } from '../types/types';

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const accountApi = createApi({
  reducerPath: 'accountApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/users/`,
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getMe: builder.query<IAccount, null>({
      query() {
        return {
          url: 'me',
          credentials: 'include',
        };
      },
      transformResponse: (result: { data: { user: IAccount } }) =>
        result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
  }),
});