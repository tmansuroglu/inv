import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { Provider as ReduxProvider } from "react-redux";
import { store, injectedRtkApi } from "./redux";
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import { Error } from "./views";

const MainPage = lazy(() => import("./views/MainPage/MainPage"));

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainPage />,
        loader: async () => {
          const response = store.dispatch(
            injectedRtkApi.endpoints.getTitle.initiate({ t: "pokemon" })
          );

          return defer({ response });
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
