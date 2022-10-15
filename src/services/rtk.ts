import { createApi } from "@reduxjs/toolkit/query/react"

import { axiosBaseQuery } from "./api"

export const rtkApi = createApi({
  reducerPath: "rtkApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: [
    "service-account",
    "user",
    "phone",
    "organization",
    "domain",
    "address",
    "payment",
    "invites",
    "email",
    "webhook",
  ],
  endpoints: (builder) => ({}),
})
