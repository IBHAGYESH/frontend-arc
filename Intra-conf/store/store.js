import { configureStore } from '@reduxjs/toolkit';

import createApiInstance from '../services/createAPIInstance';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    authState: authReducer,
    [createApiInstance.reducerPath]: createApiInstance.reducer,
  },
  devTools: import.meta.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([createApiInstance.middleware]),
});
