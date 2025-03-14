import { Grid, Box } from "@mui/material";
import ExitButton from "../components/menuComponents/ExitButton";
import ProfileViews from "../components/menuComponents/ProfileViews";
import ToolBox from "../components/menuComponents/ToolBox";

const Menu = () => {
  return (
    <Grid
      container
      direction="column"
      padding={3}
      sx={{
        height: "80vh",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
      spacing={3}
    >
      {/* Exit Button */}
      <Grid item sx={{ alignSelf: "flex-start" }}>
        <ExitButton to1="/" label="Exit" />
      </Grid>

      {/* Profile Section */}
      <Grid
        item
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <ProfileViews />
      </Grid>

      {/* Settings Section - Centered Below Profiles */}
      <Grid
        item
        sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 4 }}
      >
        <ToolBox />
      </Grid>
    </Grid>
  );
};

export default Menu;
