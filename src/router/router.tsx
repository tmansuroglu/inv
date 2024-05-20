import { createBrowserRouter } from "react-router-dom";
import { BackButton, Filters, Layout } from "@components";
import { mainPageLoader, detailsPageLoader } from "./loaders";
import { MainPage, DetailsPage } from "@views";
import { AppBar } from "@mui/material";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout
        header={
          <AppBar position="relative">
            <Filters />
          </AppBar>
        }
      >
        <MainPage />
      </Layout>
    ),
    loader: mainPageLoader,
  },
  {
    path: "/:id",
    element: (
      <Layout
        header={
          <AppBar position="relative">
            <BackButton />
          </AppBar>
        }
      >
        <DetailsPage />
      </Layout>
    ),
    loader: detailsPageLoader,
  },
]);
