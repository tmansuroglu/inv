import { store, injectedRtkApi } from "@redux";
import { LoaderFunctionArgs, defer } from "react-router-dom";
import type { TitleSearchApiArg } from "@redux";

export enum SearchParamKeys {
  Search = "search",
  Year = "year",
  Type = "type",
}

export const mainPageLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  const typeParam = url.searchParams.get(
    SearchParamKeys.Type
  ) as TitleSearchApiArg["type"];

  const yearParam = url.searchParams.get(SearchParamKeys.Year);

  const searchParam = url.searchParams.get(SearchParamKeys.Search) || "";

  const promise = store.dispatch(
    injectedRtkApi.endpoints.titleSearch.initiate({
      s: searchParam,
      type: typeParam || undefined,
      y: yearParam ? Number(yearParam) : undefined,
    })
  );
  return defer({ titles: promise });
};
