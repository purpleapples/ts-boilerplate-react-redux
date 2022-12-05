import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authApi } from '../apis/authApi';
import { postApi } from '../apis/postApi';
import { accountApi } from '../apis/accountApi';
import accountReducer from '../features/account/AccountSlice';
import postReducer from '../features/post/postSlice';
import modalReducer from '../components/modals/modalSlice';
import todoReducer from '../features/todos/todosSlice';


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    // Connect the PostApi reducer to the store
    [postApi.reducerPath]: postApi.reducer,
    accountState: accountReducer,
    postState: postReducer,
    modalState:modalReducer,
    todos:todoReducer
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      accountApi.middleware,
      // Add the PostApi middleware to the store
      postApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;