import { Button } from "@mui/material";
import { useAsyncValue } from "react-router-dom";
// TODO: there is unnecessary search parameter in the requests
// Necessary commands to run the application should preferably be communicated in the README.md file.
// Loading indicator for data and page change
// Error UI
// filter etc
// error boundary

type MainPageProps = {};

export const MainPage = ({ ...props }: MainPageProps) => {
  // TODO: fix any
  const { data } = useAsyncValue() as any;

  console.log(data);
  return (
    <div>
      <Button variant="contained" color="primary">
        Button
      </Button>
    </div>
  );
};

export default MainPage;