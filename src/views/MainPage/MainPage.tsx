import { Button } from "@mui/material";
// TODO: router
// TODO: there is unnecessary search parameter in the requests
// Necessary commands to run the application should preferably be communicated in the README.md file.
// Loading indicator
// filter etc
import { useTitleSearchQuery } from "@redux";

type MainPageProps = {};

export const MainPage = ({ ...props }: MainPageProps) => {
  const { data, error, isLoading } = useTitleSearchQuery({ s: "pokemon" });

  console.log("data", data);
  console.log("error", error);
  console.log("isLoading", isLoading);

  return (
    <div>
      <Button variant="contained" color="primary">
        Button
      </Button>
    </div>
  );
};
