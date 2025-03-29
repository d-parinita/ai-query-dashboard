import { configureStore } from '@reduxjs/toolkit';
import { dashboardApi } from './services/dashboardApi';
import dashboardReducer from './slices/dashboardSlice';

export const store = configureStore({
  reducer: {
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    dashboard: dashboardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dashboardApi.middleware),
}); 