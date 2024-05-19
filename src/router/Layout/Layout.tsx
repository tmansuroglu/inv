import { PropsWithChildren, Suspense } from "react";
import { Await, useLoaderData, useNavigation } from "react-router-dom";
import Error from "../Error";
import { CssBaseline, AppBar, Toolbar, Container } from "@mui/material";
import { FooterBox, LayoutBox, MainBox } from "./Layout.styles";

type LayoutProps = PropsWithChildren;

const Layout = ({ children }: LayoutProps) => {
  // TODO: fix any
  const { titles } = useLoaderData() as any;
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <div>Loading 1...</div>;
  }

  return (
    <LayoutBox>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>best header ever</Toolbar>
      </AppBar>
      <MainBox component="main">
        <Container>
          <Suspense fallback={<div>Loading 2...</div>}>
            <Await resolve={titles} errorElement={<Error />}>
              {children}
            </Await>
          </Suspense>
        </Container>
      </MainBox>
      <FooterBox component="footer">
        <Container>Best footer ever</Container>
      </FooterBox>
    </LayoutBox>
  );
};

export default Layout;
