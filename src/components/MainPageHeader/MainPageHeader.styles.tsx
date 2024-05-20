import { Box, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export const DesktopGridContainer = styled(Grid)(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const MobileGridContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(4, 1),
  background: theme.palette.background.paper,
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const MobileBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
