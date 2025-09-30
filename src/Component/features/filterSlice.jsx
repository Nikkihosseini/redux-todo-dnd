import { createSlice } from "@reduxjs/toolkit";

// Todo App Feature Tracking => Search & Filter

export const filterSlice = createSlice({
  name: "filter",
  initialState: "All", // All, Active, Completed
  reducers: {
    setFilter: (state , action) => action.payload
    
  },
});

export const {setFilter } = filterSlice.actions;


