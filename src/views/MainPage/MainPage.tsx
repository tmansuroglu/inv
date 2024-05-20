import { Pagination, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useAsyncValue } from "react-router-dom";
import { Empty, MovieCard } from "@components";
import { StyledStack } from "./MainPage.styles";
import { calculatePageCount } from "./MainPage.utils";
import { usePagination } from "./MainPage.utils";

// TODO: there is unnecessary search parameter in the requests
// TODO: improve types. Avoid the use of 'any'.
// TODO: Add error boundary
// TODO  Deploy the app
// TODO: in depth function test

// TODO: cross browser
// TODO: responsive

type MainPageProps = {};

export const MainPage = ({ ...props }: MainPageProps) => {
  const { data } = useAsyncValue() as any;

  const { pageNumber, handlePageChange } = usePagination();

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
          count={calculatePageCount(data?.totalResults)}
          onChange={handlePageChange}
          page={pageNumber}
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
