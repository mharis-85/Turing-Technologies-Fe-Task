import { createSlice } from "@reduxjs/toolkit"

import { AuthStore } from "./Auth.interface"

const initialState: AuthStore = {
  accessToken: undefined,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.clear()
      sessionStorage.clear()
      return initialState
    },
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
