// store/actions/contactActions.ts
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction<Contact>('contact/add');
export const editContact = createAction<Contact>('contact/edit');
export const deleteContact = createAction<string>('contact/delete');

export interface Contact {
  id: string;
  name: string;
  email: string;
}

export type ContactActions =
  | ReturnType<typeof addContact>
  | ReturnType<typeof editContact>
  | ReturnType<typeof deleteContact>;
