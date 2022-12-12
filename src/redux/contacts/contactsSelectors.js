import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectValueFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectValueFilter],
  (contacts, filterValue) => {
    return contacts
      .filter(contact => {
        return contact.name.toLowerCase().includes(filterValue.toLowerCase());
      })
      .sort((f, s) => f.name.localeCompare(s.name));
  }
);
