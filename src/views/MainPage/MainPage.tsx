import { Pagination, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import { useAsyncValue } from "react-router-dom";
import { Empty, MovieCard } from "@components";
import { StyledStack } from "./MainPage.styles";
// TODO: there is unnecessary search parameter in the requests
// TODO: any remove
// TODO: error boundary
// TODO: Necessary commands to run the application should preferably be communicated in the README.md file.
// TODO: Type seçimi
// TODO: yıl seçimi
// TODO: isim search
// TODO: fix any
// TODO: responsive
// TODO: cross browser
// TODO: test filters

type MainPageProps = {};

export const MainPage = ({ ...props }: MainPageProps) => {
  const { data } = useAsyncValue() as any;

  console.log("data?.Search", data);

  if (data?.Response === "False") {
    return <Empty />;
  }

  return (
    <StyledStack spacing={3}>
      <Grid container spacing={3}>
        {data?.Search?.map((item: any) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={item.imdbID}>
            <MovieCard
              name={item.Title}
              imdbId={item.imdbID}
              releaseDate={item.Year}
              img={item.Poster}
            />
          </Grid>
        ))}
      </Grid>
      <Stack justifyContent="center" flexDirection="row">
        <Pagination
          count={10}
          color="primary"
          variant="text"
          shape="rounded"
          size="large"
        />
      </Stack>
    </StyledStack>
  );
};

export default MainPage;
