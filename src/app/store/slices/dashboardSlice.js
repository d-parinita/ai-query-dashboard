import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchHistory: [],
  currentQuery: '',
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addToSearchHistory: (state, action) => {
      const query = action.payload;
      state.searchHistory = [
        query,
        ...state.searchHistory.filter(h => h !== query)
      ].slice(0, 5);
    },
    setCurrentQuery: (state, action) => {
      state.currentQuery = action.payload;
    },
    clearSearchHistory: (state) => {
      state.searchHistory = [];
    },
  },
});

export const { addToSearchHistory, setCurrentQuery, clearSearchHistory } = dashboardSlice.actions;
export default dashboardSlice.reducer; 