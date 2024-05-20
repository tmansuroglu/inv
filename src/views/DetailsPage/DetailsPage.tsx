import { useAsyncValue } from "react-router-dom";
import { Empty } from "@components";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { StyledCardMedia, StyledPaper } from "./Details.styles";

type DetailsPageProps = {};

const DetailsPage = ({ ...props }: DetailsPageProps) => {
  const { data: movieData } = useAsyncValue() as any;

  if (movieData?.Response === "False") {
    return <Empty />;
  }

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid xs={12}>
        <Card>
          <Grid container>
            <Grid xs={12} sm={4}>
              <StyledCardMedia
                component="img"
                image={movieData.Poster}
                title={movieData.Title}
              />
            </Grid>
            <Grid xs={12} sm={8}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {movieData.Title} ({movieData.Year})
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Rated:</strong> {movieData.Rated}
                  <br />
                  <strong>Released:</strong> {movieData.Released}
                  <br />
                  <strong>Runtime:</strong> {movieData.Runtime}
                  <br />
                  <strong>Genre:</strong> {movieData.Genre}
                  <br />
                  <strong>Director:</strong> {movieData.Director}
                  <br />
                  <strong>Writer:</strong> {movieData.Writer}
                  <br />
                  <strong>Actors:</strong> {movieData.Actors}
                  <br />
                  <strong>Plot:</strong> {movieData.Plot}
                  <br />
                  <strong>Language:</strong> {movieData.Language}
                  <br />
                  <strong>Country:</strong> {movieData.Country}
                  <br />
                  <strong>Awards:</strong> {movieData.Awards}
                </Typography>
                <Box mt={2}>
                  {movieData.Ratings.map((rating: any) => (
                    <StyledPaper key={rating.Source}>
                      <Typography variant="body2" color="text.secondary">
                        <strong>{rating.Source}:</strong> {rating.Value}
                      </Typography>
                    </StyledPaper>
                  ))}
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DetailsPage;
