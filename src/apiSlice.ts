import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getCards: builder.query({
      query: () => "cards",
    }),
    getRecentTransactions: builder.query({
      query: () => "recent-transactions",
    }),
    getCharts: builder.query({
      query: () => "charts",
    }),
    getFavorites: builder.query({
      query: () => "favorites",
    }),
    getMe: builder.query({
      query: () => "me",
    }),
  }),
});

export const {
  useGetCardsQuery,
  useGetRecentTransactionsQuery,
  useGetChartsQuery,
  useGetMeQuery,
  useGetFavoritesQuery,
} = apiSlice;
