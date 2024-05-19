import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { isUndefined, omitBy } from "lodash";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_OMDB_BASE_URL,
    paramsSerializer: (params) => {
      const urlSearchParams = new URLSearchParams(omitBy(params, isUndefined));

      urlSearchParams.append(
        "apikey",
        process.env.REACT_APP_OMDB_API_KEY || ""
      );

      return urlSearchParams.toString();
    },
  }),
  endpoints: () => ({}),
});
