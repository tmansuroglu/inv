import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { mainPageLoader } from "./loaders";
import MainPage from "../routes/MainPage/MainPage";

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
