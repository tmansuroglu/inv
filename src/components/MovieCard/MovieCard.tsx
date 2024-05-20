import { Typography } from "@mui/material";
import {
  StyledCard,
  StyledCardActionArea,
  StyledCardContent,
  StyledCardMedia,
  StyledTextStack,
} from "./MovieCard.styles";
import { useNavigate } from "react-router-dom";

type MovieCardProps = {
  name: string;
  imdbId: string;
  releaseDate: string;
  img: string;
};

export default function MovieCard({
  name,
  imdbId,
  releaseDate,
  img,
}: MovieCardProps) {
  const navigate = useNavigate();

  const handleClick = () => navigate(imdbId);

  return (
    <StyledCard>
      <StyledCardActionArea onClick={handleClick}>
        <StyledCardMedia component="img" image={img} />
        <StyledCardContent>
          <StyledTextStack spacing={3}>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <div>
              <Typography gutterBottom variant="h6" component="div">
                ({releaseDate})
              </Typography>
              <Typography variant="h6" component="div">
                IMDB ID: {imdbId}
              </Typography>
            </div>
          </StyledTextStack>
        </StyledCardContent>
      </StyledCardActionArea>
    </StyledCard>
  );
}
