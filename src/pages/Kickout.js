import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material";
import { Link } from "react-router-dom";
// This is the time
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LockIcon from "@mui/icons-material/Lock";
import ColorPick from "../tools/ColorPick";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Kickout = () => {
  const [message, setMessage] = useState(
    "Screen time reached, see you tomorrow!"
  );
  const [icon, setIcon] = useState(<AccessTimeIcon />);

  useEffect(() => {
    // Check if we came from a parental lock or screen time
    const params = new URLSearchParams(window.location.search);
    const reason = params.get("reason");

    if (reason === "locked") {
      setMessage("This account has been locked by parent controls");
      setIcon(<LockIcon />);
    } else {
      setMessage("Screen time reached, see you tomorrow!");
      setIcon(<AccessTimeIcon />);
    }
  }, []);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent={"center"}
        alignItems="center"
        spacing={2}
        sx={{ height: "80vh" }}
      >
        <Box
          sx={{
            transform: "scale(12)",
            marginTop: 20,
            marginBottom: 15,
            color: ColorPick.getSecondary(),
          }}
        >
          {icon}
        </Box>
        <Typography variant="h3" sx={{ textAlign: "center", mb: 4 }}>
          {message}
        </Typography>

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
            border: "3px solid black",
          }}
          component={Link}
          to="/menu"
        >
          <Typography variant="h4">Exit</Typography>
        </Box>
      </Grid>
    </>
  );
};

export default Kickout;
