import { createSlice } from '@reduxjs/toolkit';

export const { reducer, actions } = createSlice({
  name: 'priceHistory',
  initialState: [],
  reducers: {
    add: (priceHistory, action) => [...priceHistory, action.payload],
    clear: () => [],
  },
});
