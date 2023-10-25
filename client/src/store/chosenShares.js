import { createSlice } from '@reduxjs/toolkit';

export const { reducer, actions } = createSlice({
  name: 'chosenShares',
  initialState: [],
  reducers: {
    add: (chosenShares, action) => [...chosenShares, action.payload],
    remove: (chosenShares, action) =>
      chosenShares.filter((share) => share !== action.payload),
    clear: () => [],
  },
});
