import {createSlice} from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    userId: '',
    userName: '',
    isLogin: false,
  },
  reducers: {
    setLogin(state, action) {
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.isLogin = true;
    },
    setLogout(state, action) {
      state.userId = '';
      state.userName = '';
      state.isLogin = false;
    },
  },
});

export const {setLogin, setLogout} = profileSlice.actions;
export default profileSlice.reducer;
