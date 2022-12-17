import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filteredContactsName(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filteredContactsName } = filterSlice.actions;
