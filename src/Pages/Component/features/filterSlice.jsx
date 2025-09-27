import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: "All", // All, Active, Completed
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});


