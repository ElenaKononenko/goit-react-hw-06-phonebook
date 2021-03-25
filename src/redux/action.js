import { v4 as uui } from 'uuid';

export const addContact = data => ({
  type: 'contact/add',
  payload: {
    id: uui(),
    name: data.name,
    number: data.number,
  },
});
export const deleteContact = contactId => ({
  type: 'contact/delete',
  payload: contactId,
});
export const changeFilter = value => ({
  type: 'filter/change',
  payload: value,
});

// export const addLocal = value => ({
//   type: 'local/add',
//   payload: value,
// });
// export const getLocal = value => ({
//   type: 'local/get',
//   payload: value,
// });
