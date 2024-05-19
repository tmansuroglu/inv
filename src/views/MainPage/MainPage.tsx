import { Button } from "@mui/material";
// TODO: add alias
// TODO: router
import { useGetTitleQuery } from "../../redux";

type MainPageProps = {};

export const MainPage = ({ ...props }: MainPageProps) => {
  const { data, error, isLoading } = useGetTitleQuery({ t: "pokemon" });

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
