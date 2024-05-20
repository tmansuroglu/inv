import { AppBar, Button, Container, Drawer, IconButton } from "@mui/material";
import { useInputs } from "./MainPageHeader.utils";
import {
  DesktopGridContainer,
  MobileBox,
  MobileGridContainer,
} from "./MainPageHeader.styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { StyledToolbar } from "../common.styles";

type MainPageHeaderProps = {};

const MainPageHeader = ({ ...props }: MainPageHeaderProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const inputs = useInputs();

  const handleOpenDrawer = () => setIsDrawerOpen(true);

  const handleCloseDrawer = () => setIsDrawerOpen(false);

  return (
    <AppBar position="relative" sx={{ background: "white" }}>
      <StyledToolbar disableGutters>
        <MobileBox>
          <IconButton size="large" onClick={handleOpenDrawer} color="info">
            <MenuIcon />
          </IconButton>
          <Drawer
            keepMounted
            open={isDrawerOpen}
            onClose={handleCloseDrawer}
            PaperProps={{
              sx: { maxWidth: 270 },
            }}
          >
            <MobileGridContainer container spacing={3}>
              {inputs}
              <Grid xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleCloseDrawer}
                >
                  Close
                </Button>
              </Grid>
            </MobileGridContainer>
          </Drawer>
        </MobileBox>
        <Container maxWidth="xl">
          <DesktopGridContainer container spacing={3}>
            {inputs}
          </DesktopGridContainer>
        </Container>
      </StyledToolbar>
    </AppBar>
  );
};

export default MainPageHeader;
