import { generateMockData } from '@/app/apiService';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getDashboardData: builder.query({
      queryFn: async (query) => {
        try {
          const data = await generateMockData(query);
          return { data };
        } catch (error) {
          return { error: { message: 'Failed to fetch data' } };
        }
      },
    }),
  }),
});

export const { useGetDashboardDataQuery } = dashboardApi; 