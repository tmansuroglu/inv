import { Button } from "@mui/material";

type MainPageProps = {};

export const MainPage = ({ ...props }: MainPageProps) => {
  return (
    <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
};
