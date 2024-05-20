import { PropsWithChildren, ReactNode, Suspense } from "react";
import { Await, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { Error, Loader } from "../";
import { CssBaseline, Container, Typography } from "@mui/material";
import { FooterBox, LayoutBox, MainBox, MainContainer } from "./Layout.styles";

type LayoutProps = PropsWithChildren & { header?: ReactNode };

const Layout = ({ header, children }: LayoutProps) => {
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";

  const { response } = useLoaderData() as any;

  return (
    <LayoutBox>
      <CssBaseline />
      {header}
      <MainBox component="main">
        <MainContainer>
          {isNavigating ? (
            <Loader />
          ) : (
            <Suspense fallback={<Loader />}>
              <Await resolve={response} errorElement={<Error />}>
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
