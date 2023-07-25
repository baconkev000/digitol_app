import {createSlice} from '@reduxjs/toolkit';

export const logInOrOutSlice = createSlice({
  name: 'logInOrOut',
  initialState: {
    value: false,
  },
  reducers: {
    logInOrOut: state => {
      state.value = !state.value;
    },
  },
});

export const {logInOrOut} = logInOrOutSlice.actions;

export default logInOrOutSlice.reducer;
