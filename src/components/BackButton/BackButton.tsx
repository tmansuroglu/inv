import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { StyledStack } from "./BackButton.styles";

type BackButtonProps = {};

const BackButton = ({ ...props }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <StyledStack direction="row">
      <IconButton onClick={handleGoBack} aria-label="go back">
        <ArrowBack />
      </IconButton>
    </StyledStack>
  );
};

export default BackButton;
