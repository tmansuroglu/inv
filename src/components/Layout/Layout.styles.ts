import { Box, Container, styled } from "@mui/material";

export const LayoutBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

export const MainBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3, 0),
  background: theme.palette.primary.light,
  display: "flex",
  flexDirection: "column",
}));

export const FooterBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  background: theme.palette.primary.dark,
}));

export const MainContainer = styled(Container)({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
});
