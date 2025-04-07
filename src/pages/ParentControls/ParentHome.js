import Grid from "@mui/material/Grid2";
import { Typography, Button } from "@mui/material";

import ColorPick from "../../tools/ColorPick";
import { Link } from "react-router-dom";

import { Box } from "@mui/material";

const ParentHome = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        sx={{
          height: "70vh", // Full viewport height
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2">Welcome!</Typography>
        

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            textDecoration: "None",
            color: "white",
            backgroundColor: ColorPick.getSecondary(),
            padding: 1,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 10,
            "&:hover": {
              backgroundColor: ColorPick.getSecondaryHOVER(),
            },
          }}
          component={Link}
          to="/parentmain"
        >

          <h1>Watch</h1>
        </Box>
      </Grid>
    </>
  );
};
export default ParentHome;
