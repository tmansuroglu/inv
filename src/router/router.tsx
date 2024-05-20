import { createBrowserRouter } from "react-router-dom";
import { DetailsPageHeader, MainPageHeader, Layout } from "@components";
import { mainPageLoader, detailsPageLoader } from "./loaders";
import { MainPage, DetailsPage } from "@views";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout header={<MainPageHeader />}>
        <MainPage />
      </Layout>
    ),
    loader: mainPageLoader,
  },
  {
    path: "/:id",
    element: (
      <Layout header={<DetailsPageHeader />}>
        <DetailsPage />
      </Layout>
    ),
    loader: detailsPageLoader,
  },
]);
