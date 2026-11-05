import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import partsReducer from './slices/partsSlice';

export const store = configureStore({
  reducer: { auth: authReducer, parts: partsReducer },
});
