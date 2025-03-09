import Grid from "@mui/material/Grid2";
import { Box, Button, Typography } from "@mui/material";
import ColorPick from "../../tools/ColorPick";
import ChildSelect from "../../components/parentLayoutCompo/ChildSelect";

// These  are my card imports
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";
import TimeSlider from "../../components/parentLayoutCompo/TimeSlider";

// add a button thing so it is cleaner

const ScreenTime = () => {
    return <>
    <Grid container direction={"column"} sx={{justifyContent:"center", alignItems:"center", marginBottom:3}}>
    <Typography variant="h2">Screen Time</Typography>

    <ChildSelect/>

    <Grid container direction={"row"} sx={{
        justifyContent:"space-between", 
        width:"50%",
        marginTop:10}}>
    
    <Grid container direction={"column"} marginBottom={10}>
    <TimeSlider/>
    </Grid>

    <Grid container direction={"column"} spacing={3} marginBottom={10} sx={{justifyContent:"center", alignItems:"center"}}>

          <Button  sx={{
        backgroundColor:ColorPick.getSecondary, 
        paddingLeft:2,
        paddingRight:2,
        color:"black",
        
        fontSize:30
        }}>Weekday</Button>
          <Button  sx={{
        backgroundColor:ColorPick.getSecondary, 
        paddingLeft:2,
        paddingRight:2,
        color:"black",
   
        fontSize:30
        }}>Weekend</Button>
    </Grid>
    </Grid>
    <Button  sx={{
        backgroundColor:ColorPick.getSecondary, 
        paddingLeft:2,
        paddingRight:2,
        color:"black",
        width:150,
        height:75,
        fontSize:30
        }}>Confirm</Button>

    </Grid>
    </>
}

export default ScreenTime