// Importing the createSlice function from the Redux Toolkit
import {createSlice} from '@reduxjs/toolkit';

// Defining the initial state for the user slice of the store
const initialState = {
  firstName: 'Nata',
  lastName: 'Vacheishvili',
  userId: 1,
  profileImage:
    'https://static.wikia.nocookie.net/vsbattles/images/9/92/Emilia_ReZero.png/revision/latest/scale-to-width-down/360?cb=20210929113712',
  isLoggedIn: false,
};

// Creating a new slice of the store named "user" with its own set of reducers
export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    // Defining the "updateFirstName" reducer function
    // It takes the current state and an action object as parameters
    // It updates the firstName field of the state with the payload value of the action

    // updateFirstName: (state, action) => {
    //   state.firstName = action.payload.firstName;
    logIn: (state, action) => {
      return {...state, ...{isLoggedIn: true}, ...action.payload};
    },
    resetToInitialState: () => {
      return initialState;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

// Exporting the reducers here from the "User" slice
// makes them available to other parts of the app that want to use it

// export const {resetToInitialState, updateFirstName} = User.actions;
export const {logIn, resetToInitialState, updateToken} = User.actions;
export default User.reducer;
