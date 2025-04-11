import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import Button from "@mui/material";
import { Link } from "react-router-dom";
// This is the time
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ColorPick from "../tools/ColorPick";

const Kickout = () => {

    return <>
    <Grid container direction="column" justifyContent={"center"} alignItems="center" spacing={2} sx={{  height:"80vh", }}>
   <Box sx={{transform:"scale(12)", marginTop:20, marginBottom:15}}>
    <AccessTimeIcon/>
   </Box>
    <h1>Screen time reached, see you tommorow!</h1>

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
            border:"3px solid black",
          }}
        component={Link}
        to="/menu"
        >

          <h1>Exit</h1>
        </Box>
    </Grid>
    </>
}

export default Kickout;