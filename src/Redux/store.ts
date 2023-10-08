// store.ts

import { configureStore } from '@reduxjs/toolkit';
import booleanReducer from './slices/booleanSlice';

const store = configureStore({
  reducer: {
    boolean: booleanReducer, // Add your slice reducer here
    // ...other reducers
  },
});

export default store;
