import { AppBar, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { StyledToolbar } from "../common.styles";

type DetailsPageHeaderProps = {};

const DetailsPageHeader = ({ ...props }: DetailsPageHeaderProps) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <AppBar position="relative">
      <StyledToolbar>
        <IconButton
          onClick={handleGoBack}
          aria-label="go back"
          size="large"
          color="info"
        >
          <ArrowBack />
        </IconButton>
      </StyledToolbar>
    </AppBar>
  );
};

export default DetailsPageHeader;
