// I envision this to be the page that is shows all the info after logging in
import { TextField, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

// The following are links to the different parts of the pag

import ExitButton from "../components/menuComponents/ExitButton";
import ProfileViews from "../components/menuComponents/ProfileViews";
import ToolBox from "../components/menuComponents/ToolBox";

import Grid from "@mui/material/Grid2";
const Menu = () => {
  return (
    <>
      <Grid
        container
        direction={"column"}
        padding={3}
        sx={{ height: "80vh", justifyItems: "flex-start" }}
        spacing={3}
      >
        <Grid>
          <ExitButton to1="/" label="Exit" />
        </Grid>
        <ProfileViews />

<Box marginTop={8}>
        <ToolBox />
        </Box>
      </Grid>
    </>
  );
};

export default Menu;
