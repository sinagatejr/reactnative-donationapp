// Importing AsyncStorage from the @react-native-async-storage/async-storage library to persist Redux state
import AsyncStorage from '@react-native-async-storage/async-storage';

// Importing the persistReducer and persistStore functions from the redux-persist library
import {persistReducer, persistStore} from 'redux-persist';

// Importing the combineReducers and configureStore functions from the Redux Toolkit
import {combineReducers, configureStore} from '@reduxjs/toolkit';

// Importing the User reducer from the ./reducers/User file
import User from './reducers/User';

// Importing the Categories reducer from the ./reducers/Categories file
import Categories from './reducers/Categories';

import Donations from './reducers/Donations';

// Creating a rootReducer that combines all reducers in the app

const rootReducer = combineReducers({
  // Here, we're combining the User reducer and calling it "user"
  user: User,
  categories: Categories,
  donations: Donations,
});

// Configuring the redux-persist library to persist the root reducer with AsyncStorage
const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

// We're passing in the persisted reducer as the main reducer for the store
const persistedReducer = persistReducer(configuration, rootReducer);

// Creating a new Redux store using the configureStore function
// We're passing in the rootReducer as the main reducer for the store
const store = configureStore({
  reducer: persistedReducer,

  // Using the getDefaultMiddleware function from the Redux Toolkit to add default middleware to the store
  // We're passing in an object with the serializableCheck key set to false to avoid serialization errors with non-serializable data
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

// Exporting the store to be used in the app
// Also exporting the persistor object created with the persistStore function from redux-persist
export default store;
export const persistor = persistStore(store);
