import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';

export const register = createAsyncThunk('users/register', async (payload) => {
  //  call API to register
  const data = await userApi.register(payload);
  // save data to localstorage
  localStorage.setItem('access_token', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.user));
  return data.user;
});
const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    setting: {},
  },
  reducers: {},
  extraReducers: {
    // 'user/register/fulfilled': () => {},
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { reducer } = userSlice;

export default reducer;
