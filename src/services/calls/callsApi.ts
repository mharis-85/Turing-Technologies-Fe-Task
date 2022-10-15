import { rtkApi } from "../rtk"
import { CallResponse } from "./calls.interfaces"

export const callsApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getCall: builder.query<CallResponse, { offset: number; limit: number }>({
      query: (data) => ({ url: "/calls", method: "get", params: data }),
    }),
  }),
})

export const { useGetCallQuery } = callsApi
