import { store, injectedRtkApi } from "@redux";
import { defer } from "react-router-dom";

export const mainPageLoader = async () => {
  const promise = store.dispatch(
    injectedRtkApi.endpoints.titleSearch.initiate({ s: "pokemon" })
  );
  return defer({ titles: promise });
};
