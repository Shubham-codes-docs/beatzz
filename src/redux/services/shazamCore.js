import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders(headers) {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_SHAZAM_RAPID_API_KEY);
      headers.set("X-RapidAPI-Host", "shazam.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      getCharts: builder.query({
        query: () => "/charts/track",
      }),
      getSongDetails: builder.query({
        query: (id) => `/songs/get-details?key=${id}`,
      }),
      getRelatedSongs: builder.query({
        query: (id) => `songs/list-recommendations?key=${id}`,
      }),
      getArtistDetails: builder.query({
        query: (id) => `/artists/get-summary?id=${id}`,
      }),
      getSongsByCountry: builder.query({
        query: (country) => `/charts/track?listId=ip-country-chart-${country}`,
      }),
      getTopCharts: builder.query({
        query: () => `/charts/track`,
      }),
      getSongsByGenre: builder.query({
        query: (genre) => `/charts/track?listId=${genre}`,
      }),
      getSongsBySearch: builder.query({
        query: (search) => `/search?term=${search}`,
      }),
    };
  },
});

export const {
  useGetChartsQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery,
} = shazamApi;
