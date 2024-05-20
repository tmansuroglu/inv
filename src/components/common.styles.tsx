import { Toolbar, styled } from "@mui/material";

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  background: theme.palette.background.paper,
  height: 90,
}));
