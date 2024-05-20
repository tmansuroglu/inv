import { PropsWithChildren, Suspense } from "react";
import { Await, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { Error, Filters, Loader } from "../";
import { CssBaseline, AppBar, Container, Typography } from "@mui/material";
import { FooterBox, LayoutBox, MainBox, MainContainer } from "./Layout.styles";

type LayoutProps = PropsWithChildren;

const Layout = ({ children }: LayoutProps) => {
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";

  const { titles } = useLoaderData() as any;

  return (
    <LayoutBox>
      <CssBaseline />
      <AppBar position="relative">
        <Filters />
      </AppBar>
      <MainBox component="main">
        <MainContainer>
          {isNavigating ? (
            <Loader />
          ) : (
            <Suspense fallback={<Loader />}>
              <Await resolve={titles} errorElement={<Error />}>
                {children}
                <Outlet />
              </Await>
            </Suspense>
          )}
        </MainContainer>
      </MainBox>
      <FooterBox component="footer">
        <Container>
          <Typography variant="body2" color="white" align="center">
            Best footer ever
          </Typography>
        </Container>
      </FooterBox>
    </LayoutBox>
  );
};

export default Layout;
