import {createSelector, createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userID: 0,
    firstName: 'GUEST',
    middleName: 'GUEST',
    lastName: 'GUEST',
    phone: null,
    email: 'guest@digitol.com',
    keepUpdated: false,
    loggedIn: false,
  },
  reducers: {
    LOGINOROUT: state => {
      state.loggedIn = !state.loggedIn;
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

export const {LOGINOROUT, UPDATEUSER} = userSlice.actions;

export default userSlice.reducer;
