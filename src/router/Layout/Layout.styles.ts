import { Box, styled } from "@mui/material";

export const LayoutBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

export const MainBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3, 0),
  background: "orange",
}));

export const FooterBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0),
}));
