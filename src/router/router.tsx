import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { mainPageLoader } from "./loaders";
import { MainPage } from "@views";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <MainPage />
      </Layout>
    ),
    loader: mainPageLoader,
  },
]);
