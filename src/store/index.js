import { configureStore } from '@reduxjs/toolkit';
import senateReducer from './senateSlice';

export const store = configureStore({
  reducer: {
    senate: senateReducer,
  },
});
