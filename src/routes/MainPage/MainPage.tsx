import { Grid, Pagination, Stack } from "@mui/material";
import { useAsyncValue } from "react-router-dom";
import { MovieCard } from "@components";
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

  console.log("data?.Search", data?.Search);

  // Type seçimi
  // yıl seçimi
  // pagination implementation
  // isim search

  return (
    <Stack spacing={5}>
      <Grid container spacing={3}>
        {data?.Search?.map((item: any) => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={item.imdbID}>
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
    </Stack>
  );
};

export default MainPage;
