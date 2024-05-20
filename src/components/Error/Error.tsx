import { Box, Container, Typography } from "@mui/material";

type ErrorProps = {};

const Error = ({ ...props }: ErrorProps) => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h1" component="div" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" component="div" gutterBottom>
          Oops! Page not found.
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </Typography>
      </Box>
    </Container>
  );
};

export default Error;
