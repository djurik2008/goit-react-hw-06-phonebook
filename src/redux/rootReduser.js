import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReduser from '../redux/myPhoneBook/contacts/contactsSlice';
import filterReduser from '../redux/myPhoneBook/filter/filterslice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
