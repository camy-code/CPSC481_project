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
        
        marginTop:10}}>
    
    <Grid container direction={"column"} marginBottom={10}>
        
    <TimeSlider/>
    </Grid>

    </Grid>
    <Button  sx={{
        backgroundColor:ColorPick.getSecondary, 
        paddingLeft:2,
        paddingRight:2,
        color:"white",
        width:150,
        height:75,
        fontSize:30,
        textTransform:"none",
        borderRadius:5,
        border:"3px solid black",
        "&:hover": {
            backgroundColor: ColorPick.getSecondaryHOVER(),
       
        },
        marginTop:-10
        
        }}
        onClick={()=>{alert("Screen time saved")}}>Confirm</Button>

    </Grid>
    </>
}

export default ScreenTime