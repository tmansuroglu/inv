import { Typography } from "@mui/material";
import { SentimentDissatisfied as NoDataIcon } from "@mui/icons-material";
import { StyledBox } from "./Empty.styles";

const Empty = () => {
  return (
    <StyledBox>
      <NoDataIcon style={{ fontSize: 80, color: "#ccc" }} />
      <Typography variant="h6" color="textSecondary" gutterBottom>
        No Data Available
      </Typography>
    </StyledBox>
  );
};

export default Empty;
