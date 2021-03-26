import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './action';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  // [actions.addContact]: (state, { payload }) => addContact(state, payload),
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

// Эта ф-ция на проверку оригинальности контакта. Ее правильно писать здесь или в Сабмите отправки форми(как она сейчас сделана)?

// const uniqueContac = (allContacts, data) => {
//   return allContacts.find(
//     contact => contact.name.toLowerCase() === data.name.toLocaleLowerCase(),
//   );
// };
// const addContact = (state, payload) => {
//   if (uniqueContac(state, payload)) {
//     alert(`${payload.name} is already in contacts`);
//     return state;
//   } else {
//     return [...state, payload];
//   }
// };
////////////////////////////
export default combineReducers({
  items,
  filter,
});
