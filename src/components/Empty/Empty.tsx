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
      <Typography variant="body1" color="textSecondary">
        There is currently no data to display. Please change filters or try
        again later.
      </Typography>
    </StyledBox>
  );
};

export default Empty;
