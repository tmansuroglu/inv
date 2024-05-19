import { baseApi as api } from "./baseApi";
export const addTagTypes = [
  "Title Parameter",
  "ID Parameter",
  "Search Parameter",
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getTitle: build.query<GetTitleApiResponse, GetTitleApiArg>({
        query: (queryArg) => ({
          url: `/?t`,
          params: {
            t: queryArg.t,
            y: queryArg.y,
            type: queryArg["type"],
            plot: queryArg.plot,
            r: queryArg.r,
            callback: queryArg.callback,
          },
        }),
        providesTags: ["Title Parameter"],
      }),
      getId: build.query<GetIdApiResponse, GetIdApiArg>({
        query: (queryArg) => ({
          url: `/?i`,
          params: {
            i: queryArg.i,
            plot: queryArg.plot,
            r: queryArg.r,
            callback: queryArg.callback,
          },
        }),
        providesTags: ["ID Parameter"],
      }),
      titleSearch: build.query<TitleSearchApiResponse, TitleSearchApiArg>({
        query: (queryArg) => ({
          url: `/?s`,
          params: {
            s: queryArg.s,
            y: queryArg.y,
            type: queryArg["type"],
            r: queryArg.r,
            page: queryArg.page,
            callback: queryArg.callback,
          },
        }),
        providesTags: ["Search Parameter"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as api };
export type GetTitleApiResponse = unknown;
export type GetTitleApiArg = {
  /** Title of movie or series */
  t: string;
  /** Year of release */
  y?: number;
  /** Return movie or series */
  type?: "movie" | "series";
  /** Return short or full plot */
  plot?: "short" | "full";
  /** The response type to return */
  r?: "json" | "xml";
  /** JSONP callback name */
  callback?: string;
};
export type GetIdApiResponse = unknown;
export type GetIdApiArg = {
  /** A valid IMDb ID (e.g. tt0000001) */
  i: string;
  /** Return short or full plot */
  plot?: "short" | "full";
  /** The response type to return */
  r?: "json" | "xml";
  /** JSONP callback name */
  callback?: string;
};
export type TitleSearchApiResponse = unknown;
export type TitleSearchApiArg = {
  /** Title of movie or series */
  s: string;
  /** Year of release */
  y?: number;
  /** Return movie or series */
  type?: "movie" | "series";
  /** The response type to return */
  r?: "json" | "xml";
  /** Page number to return */
  page?: number;
  /** JSONP callback name */
  callback?: string;
};
export const { useGetTitleQuery, useGetIdQuery, useTitleSearchQuery } =
  injectedRtkApi;
