import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/contactsOperations';
// import { logOut } from 'redux/auth/authOperations';

// const initialContactsState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

const handlePending = state => {
  state.isLoading = true;
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleError,
    [addContact.rejected]: handleError,
    [deleteContact.rejected]: handleError,

    [fetchContacts.fulfilled](state, action) {
      handleFulfilled(state);
      state.items = action.payload;
    },

    [addContact.fulfilled](state, action) {
      handleFulfilled(state);
      state.items.push(action.payload);
    },

    [deleteContact.fulfilled](state, action) {
      handleFulfilled(state);
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    //     [logOut.fulfilled](state) {
    //       state.items = [];
    //       state.error = null;
    //       state.isLoading = false;
    //     },
  },
});

export const contactsReducer = contactsSlice.reducer;

// ===заміна=================================
// import { createSlice } from '@reduxjs/toolkit';
// import {
//   fetchContacts,
//   addContact,
//   deleteContact,
//   // editContact,
// } from './contactsOperations';

// const initialContactsState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleError = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };
// const handleFulfilled = state => {
//   state.isLoading = false;
//   state.error = null;
// };

// const contactsSlice = createSlice({
// name: 'contacts',
// initialState: initialContactsState,
// extraReducers: builder =>
// builder
// .addCase(fetchContacts.pending, handlePending)
// .addCase(fetchContacts.fulfilled, (state, action) => {
//   handleFulfilled(state);
//   state.items = action.payload;
// })
// .addCase(fetchContacts.rejected, handleError)
// .addCase(addContact.pending, handlePending)
// .addCase(addContact.fulfilled, (state, action) => {
//   handleFulfilled(state);
//   state.items.push(action.payload);
// })
// .addCase(addContact.rejected, handleError)
// .addCase(deleteContact.pending, handlePending)
// .addCase(deleteContact.fulfilled, (state, action) => {
//   handleFulfilled(state);
//   const index = state.items.findIndex(
//     task => task.id === action.payload.id
//   );
//   state.items.splice(index, 1);
// })
// .addCase(deleteContact.rejected, handleError),
// ===============================================
// .addCase(editContact.pending, handlePending)
// .addCase(editContact.fulfilled, (state, action) => {
//   handleFulfilled(state);
//   const index = state.items.findIndex(
//     task => task.id === action.payload.id
//   );
//   state.items.splice(index, 1, action.payload);
// })
// .addCase(editContact.rejected, handleError),
// });

// export const contactsReducer = contactsSlice.reducer;
// =================================================
