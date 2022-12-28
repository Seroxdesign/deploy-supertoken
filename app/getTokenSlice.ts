import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { useToken } from 'wagmi'
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

const initialState: any = {
  token: {},
}

export const ensApi = createApi({
  reducerPath: "token",
  baseQuery: fakeBaseQuery(),
  //@ts-ignore
  endpoints: (builder) => {
    return;
  }
});

// Action creators are generated for each case reducer function
