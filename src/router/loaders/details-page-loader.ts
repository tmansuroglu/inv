import { LoaderFunctionArgs, defer } from "react-router-dom";
import { store, injectedRtkApi } from "@redux";

export const detailsPageLoader = async ({ params }: LoaderFunctionArgs) => {
  const promise = store.dispatch(
    injectedRtkApi.endpoints.getId.initiate({
      i: params.id || "",
    })
  );

  return defer({ response: promise });
};
