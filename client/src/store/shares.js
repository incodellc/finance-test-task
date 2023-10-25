import { createSlice } from '@reduxjs/toolkit';

export const { reducer, actions } = createSlice({
  name: 'shares',
  initialState: [],
  reducers: {
    set: (shares, action) => action.payload,
    clear: () => [],
  },
});
