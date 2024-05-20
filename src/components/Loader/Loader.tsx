import { CircularProgress } from "@mui/material";
import { StyledBox } from "./Loader.styles";

type LoaderProps = {};

const Loader = ({ ...props }: LoaderProps) => {
  return (
    <StyledBox>
      <CircularProgress color="secondary" size={50} />
    </StyledBox>
  );
};

export default Loader;
