import { Typography, Box, Button, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ConstantLib from "../../tools/ConstantLib";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ColorPick from "../../tools/ColorPick";

const getArrow =(i) =>{
    const style123 = { fontSize:100,color:"black", ":hover":{color:ColorPick.getSecondary()}};

    // TODO: when we implement later we will need to have a user state here
    // In order to update the change

    return <>
    <IconButton
            disableRipple
            onClick={() => {
                if (i === 0) {
              console.log("Still need todo LEFT");
                }
                else {
                    console.log("Still need todo RIGHT");
                }
            }}
          >
           {i===0 ? <ArrowLeftIcon sx={style123}/> : <ArrowRightIcon sx={style123}/>}
          </IconButton>
    </>
}

const TimeSelector = () => {
  return (
    <>
      <Grid container direction={"column"} alignItems={"center"} >
        <Grid container direction={"row"} alignItems={"center"} spacing={3}>
         {getArrow(0)}
         <Box padding={5}>
          <Typography variant="h4">Week {ConstantLib.getWeek()}</Typography>
          </Box>
          {getArrow(1)}
        </Grid>

            <Button  sx={{backgroundColor:ColorPick.getSecondary(), padding:1, transform:"scale(1.5)",width:120,fontSize:40, color:"black"}}
            onClick={()=>{console.log("Still gotta do")}}>
                <Typography>Now</Typography>
            </Button>

      </Grid>
    </>
  );
};

export default TimeSelector;

// Cam, for the love of coffee, you need to specify that a grid is a container!!
