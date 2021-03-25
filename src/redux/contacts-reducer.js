import { combineReducers } from 'redux';

const uniqueContact = (allContacts, data) => {
  return allContacts.find(
    contact => contact.name.toLowerCase() === data.name.toLocaleLowerCase(),
  );
};

const items = (state = [], { type, payload }) => {
  switch (type) {
    case 'contact/add':
      if (uniqueContact(state, payload)) {
        alert(`${payload.name} is already in contacts`);
        return state;
      } else {
        return [...state, payload];
      }
    case 'contact/delete':
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case 'filter/change':
      return payload;
    default:
      return state;
  }
};
export default combineReducers({
  items,
  filter,
});
