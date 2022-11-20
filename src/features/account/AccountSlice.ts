import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccount } from '../../types/types';

interface IaccountState {
  user: IAccount | null;
}

const initialState: IaccountState = {
  user: null,
};

export const accountSlice = createSlice({
  initialState,
  name: 'accountSlice',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IAccount>) => {
      state.user = action.payload;
    },
  },
});

export default accountSlice.reducer;

export const { logout, setUser } = accountSlice.actions;