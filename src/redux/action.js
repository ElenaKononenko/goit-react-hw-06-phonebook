import { v4 as uui } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/add', data => ({
  payload: {
    id: uui(),
    name: data.name,
    number: data.number,
  },
}));
export const changeFilter = createAction('filter/change');
export const deleteContact = createAction('contact/delete');
