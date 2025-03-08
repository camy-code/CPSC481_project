import { Typography, Box } from "@mui/material"
import Grid from "@mui/material/Grid2"

// The following are the componets that I need to import
import TimeSelector from "../../components/parentLayoutCompo/TimeSelector";

import ConstantLib from "../../tools/ConstantLib";
// Profiles (This is copied from profile views)
const kidsProf = ConstantLib.getKidsProfile(); 
// Cam, look at you putting in refactored code


const History = () => {
    return <>

  
  <Grid container direction={"column"} sx={{justifyContent:"center", alignItems:"center"}}>

  <Box sx={{marginTop:2}}>
  <Typography variant="h2">History</Typography>
  </Box>

  {/* Gotta do a date and time selector */}
  <TimeSelector/>

  <h1>Gelo</h1>


  </Grid>

    </>
}

export default History