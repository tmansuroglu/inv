import { CardMedia, CardMediaProps, Paper, styled } from "@mui/material";

export const StyledCardMedia = styled(CardMedia)<CardMediaProps>({
  height: "100%",
  objectFit: "cover",
});

export const StyledPaper = styled(Paper)<CardMediaProps>(({ theme }) => ({
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));
