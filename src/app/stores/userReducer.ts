import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userID: 0,
    firstName: 'GUEST',
    middleName: 'GUEST',
    lastName: 'GUEST',
    dob: null,
    phone: null,
    email: 'guest@digitol.com',
    keepUpdated: false,
    initialRoute: 'PhoneNumberScreen',
  },
  reducers: {
    UPDATEINITIALROUTE: (state: any, action: PayloadAction<any>) => {
      state.initialRoute = action.payload;
    },
    /**
     * @param {state} state
     * @param {User} action
     */
    UPDATEUSER: (state: any, action: PayloadAction<any>) => {
      for (let prop in action.payload) {
        if (state.hasOwnProperty(prop)) {
          state[prop] = action.payload[prop];
        }
      }
    },
  },
});

export const {UPDATEINITIALROUTE, UPDATEUSER} = userSlice.actions;

export default userSlice.reducer;
