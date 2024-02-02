import { combineReducers } from '@reduxjs/toolkit';

import contactsReduser from '../redux/myPhoneBook/contacts/contactsSlice';
import filterReduser from '../redux/myPhoneBook/filter/filterslice';

const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
});

export default rootReducer;
