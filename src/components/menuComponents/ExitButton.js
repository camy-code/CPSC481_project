import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Link } from "react-router-dom";
import ColorPick from "../../tools/ColorPick";
<<<<<<< HEAD
=======
const ExitButton = ({ to1 = "/", label = "Exit" }) => {
    return <>
    <Button component={Link} to={to1}sx={{backgroundColor:ColorPick.getSecondary(), padding:1, paddingRight:2,textTransform:"none",
        "&:hover": {
            backgroundColor:ColorPick.getSecondaryHOVER()
        },
      border:"3px solid black",
    }}>
    <Grid container direction={"row"} spacing={1} alignItems="center" sx={{color:"white"}}>
       
       <ArrowBackOutlinedIcon />
>>>>>>> 07d07f658f7fbed7a26bee69558c5391f1aa745f

const ExitButton = ({ to1 = "/", label = "Exit", color = "black" }) => {
  return (
    <>
      <Button
        component={Link}
        to={to1}
        sx={{ backgroundColor: ColorPick.getSecondary(), padding: 1 }}
      >
        <Grid
          container
          direction={"row"}
          spacing={1}
          alignItems="center"
          sx={{ color: color }}
        >
          <ArrowBackOutlinedIcon />
          <Typography>{label}</Typography>
        </Grid>
      </Button>
    </>
  );
};

export default ExitButton;
