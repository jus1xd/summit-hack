// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IDataMessage, IFullMessage } from "../../models/IMessage";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJiNWEyYjk5Mi1kZjYxLTQ4YjctODA0My04NGUwN2U2MWVkM2UiLCJ1bmlxdWVfbmFtZSI6Imdyb3VwLjIiLCJuYmYiOjE2OTM3NDg2MDksImV4cCI6MTcyNDg1MjYwOSwiaWF0IjoxNjkzNzQ4NjA5LCJpc3MiOiJodHRwczovL2RvYnJvemFpbS5ydS8iLCJhdWQiOiJodHRwczovL2RvYnJvemFpbS5ydS8ifQ.U8W9Qsg_akhlmRF-QT5NuQosmHz1yGK8MDAU2wa-5GI";

// Define a service using a base URL and expected endpoints
const baseUrl = "http://10.250.2.2:2050/";

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
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Message"],
    }),
    sendMessage: builder.mutation<string, IDataMessage>({
      query: (data) => ({
        url: `api/messages`,
        method: "POST",
        mode: "cors",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Message"],
    }),
  }),
});
