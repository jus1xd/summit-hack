// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IDataMessage, IFullMessage } from "../../models/IMessage";

// Define a service using a base URL and expected endpoints
const baseUrl = "http://localhost:5000/";

export const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["Message"],
  endpoints: (builder) => ({
    getMessage: builder.query<IFullMessage, string>({
      query: (id) => ({
        url: `api/messages/${id}`,
        method: "GET",
        mode: "cors",
      }),
      providesTags: ["Message"],
    }),
    sendMessage: builder.mutation<string, IDataMessage>({
      query: (data) => ({
        url: `api/messages`,
        method: "POST",
        mode: "cors",
        body: data,
      }),
      invalidatesTags: ["Message"],
    }),
  }),
});
