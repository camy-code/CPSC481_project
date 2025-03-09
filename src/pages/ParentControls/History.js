import { Typography, Box } from "@mui/material"
import Grid from "@mui/material/Grid2"

// The following are the componets that I need to import
import TimeSelector from "../../components/parentLayoutCompo/TimeSelector";
import ChildSelect from "../../components/parentLayoutCompo/ChildSelect";

import { useState } from "react";
import ConstantLib from "../../tools/ConstantLib";
import ColorPick from "../../tools/ColorPick";

// Profiles (This is copied from profile views)
const kidsProf = ConstantLib.getKidsProfile(); 
const showONE = ConstantLib.getShows()[0];
const showALL = ConstantLib.getShows();
// Cam, look at you putting in refactored code


const History = () => {
  const [select, setSelect] = useState(true)

    return <>

  
  <Grid container direction={"column"} sx={{justifyContent:"center", alignItems:"center"}}>

  <Box sx={{marginTop:2}}>
  <Typography variant="h2">History</Typography>
  </Box>

  {/* Gotta do a date and time selector */}
  <TimeSelector/>

  <ChildSelect/>
{/* TODO:
  Still need to do the show summaries here as well 
  as when you click a show one can see the trailer, full desc,
  and restrict (need to select kid to restrict) */}

</Grid>




    </>
}

export default History