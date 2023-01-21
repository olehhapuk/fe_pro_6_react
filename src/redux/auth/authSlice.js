import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import { login, logout, register } from './authOperations';

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, { payload }) {
      state.loading = true;
    },
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.loading = false;
      state.error = initialState.error;
    },
    [register.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const authReducer = persistReducer(
  {
    key: 'auth',
    blacklist: ['loading', 'error'],
    storage,
  },
  authSlice.reducer
);
