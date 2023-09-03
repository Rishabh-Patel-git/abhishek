// store/reducers/contactReducer.ts
import { createReducer } from '@reduxjs/toolkit';
import { Contact, ContactActions } from '../actions/contactActions';

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

export const contactReducer = createReducer(initialState, {
  // Implement your reducer logic for adding, editing, and deleting contacts here
});
