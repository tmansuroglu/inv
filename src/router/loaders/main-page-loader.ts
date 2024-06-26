import { store, injectedRtkApi } from "@redux";
import { LoaderFunctionArgs, defer } from "react-router-dom";
import type { TitleSearchApiArg } from "@redux";

export enum SearchParamKeys {
  Search = "search",
  Year = "year",
  Type = "type",
  Page = "page",
}

export const DEFAULT_PAGE = 1;
export const DEFAULT_SEARCH_PARAM = "pokemon";

export const mainPageLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  const typeParam = url.searchParams.get(
    SearchParamKeys.Type
  ) as TitleSearchApiArg["type"];

  const yearParam = url.searchParams.get(SearchParamKeys.Year);

  const searchParam =
    url.searchParams.get(SearchParamKeys.Search)?.toLocaleLowerCase() ||
    DEFAULT_SEARCH_PARAM;

  const pageParam = url.searchParams.get(SearchParamKeys.Page);

  const promise = store.dispatch(
    injectedRtkApi.endpoints.titleSearch.initiate({
      s: searchParam,
      type: typeParam || undefined,
      y: yearParam ? Number(yearParam) : undefined,
      page: pageParam ? Number(pageParam) : DEFAULT_PAGE,
    })
  );
  return defer({ response: promise });
};
