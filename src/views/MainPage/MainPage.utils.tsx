import { useSearchParams } from "react-router-dom";
import { DEFAULT_PAGE, SearchParamKeys } from "@router";
import { ChangeEvent } from "react";

const PAGE_SIZE = 10;

export const calculatePageCount = (itemAmount?: number) =>
  itemAmount ? Math.ceil(itemAmount / PAGE_SIZE) : 0;

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (event: ChangeEvent<unknown>, pageNumber: number) =>
    setSearchParams((prev) => {
      prev.set(SearchParamKeys.Page, pageNumber.toString());

      return prev;
    });

  const pageNumberSearchParam = searchParams.get(SearchParamKeys.Page);

  return {
    handlePageChange,
    pageNumber: pageNumberSearchParam
      ? Number(pageNumberSearchParam)
      : DEFAULT_PAGE,
  };
};
