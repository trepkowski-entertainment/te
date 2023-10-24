import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './../slice/modalSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    // inne reducery
  },
});

export default store;
