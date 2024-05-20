import { MenuItem, SelectChangeEvent } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchParamKeys } from "@router";
import { debounce } from "lodash";
import dayjs, { Dayjs } from "dayjs";

type SearchParamValue = string;

type SearchParam = { key: SearchParamKeys; value: SearchParamValue };

export const useInputs = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getInputValueFromSearchParams = (key: SearchParamKeys) =>
    searchParams.get(key) || "";

  const [searchInputValue, setSearchInputValue] = useState<string>(
    getInputValueFromSearchParams(SearchParamKeys.Search)
  );

  const handleSearchParameterChange = useCallback(
    ({ key, value }: SearchParam) =>
      setSearchParams((prev) => {
        if (value) {
          prev.set(key, value);
        } else {
          prev.delete(key);
        }

        prev.delete(SearchParamKeys.Page);

        return prev;
      }),
    [setSearchParams]
  );

  const handleTypeInputChange = (event: SelectChangeEvent<string>) =>
    handleSearchParameterChange({
      key: SearchParamKeys.Type,
      value: event.target.value,
    });

  const debouncedSearchParameterChange = useMemo(
    () =>
      debounce(
        ({ key, value }: SearchParam) =>
          handleSearchParameterChange({
            key,
            value,
          }),
        500
      ),
    [handleSearchParameterChange]
  );

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    setSearchInputValue(value);

    debouncedSearchParameterChange({ key: SearchParamKeys.Search, value });
  };

  const handleYearInputChange = (event: Dayjs | null) =>
    handleSearchParameterChange({
      key: SearchParamKeys.Year,
      value: event?.year().toString() || "",
    });

  const yearValue = getInputValueFromSearchParams(SearchParamKeys.Year);
  return {
    typeInputValue: getInputValueFromSearchParams(SearchParamKeys.Type),
    yearInputValue: yearValue ? dayjs(yearValue) : undefined,
    searchInputValue: searchInputValue,
    handleSearchInputChange,
    handleYearInputChange,
    handleTypeInputChange,
  };
};

export enum MovieType {
  None = "",
  Series = "series",
  Movie = "movie",
  Episode = "episode",
}

export const generateTypeOptions = () =>
  Object.entries(MovieType).map(([key, value]) => (
    <MenuItem key={key} value={value}>
      {key}
    </MenuItem>
  ));
