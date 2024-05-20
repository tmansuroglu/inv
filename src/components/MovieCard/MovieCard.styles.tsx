import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardMediaProps,
  Stack,
  styled,
} from "@mui/material";

export const StyledCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const StyledCardActionArea = styled(CardActionArea)({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
});

export const StyledCardMedia = styled(CardMedia)<CardMediaProps>({
  objectFit: "cover",
  height: 400,
});

export const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
});

export const StyledTextStack = styled(Stack)({
  height: "100%",
  width: "100%",
  justifyContent: "space-between",
  textAlign: "center",
});
