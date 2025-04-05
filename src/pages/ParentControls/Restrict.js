import { Typography, Box, CardHeader } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { Card, CardContent, CardMedia, CardActions, Button } from "@mui/material";


// The following are the componets that I need to import
import TimeSelector from "../../components/parentLayoutCompo/TimeSelector";
import ChildSelect from "../../components/parentLayoutCompo/ChildSelect";

import { use, useState } from "react";
import ConstantLib from "../../tools/ConstantLib";
import ColorPick from "../../tools/ColorPick";
import HistoryCard from "../../components/parentLayoutCompo/HistoryCard";
import SearchBar from "../../components/SearchBar";

const sampleDesc = "Lorem ipsum odor amet, consectetuer adipiscing elit. Vehicula rutrum orci vulputate ut ultrices varius. Morbi dapibus suscipit senectus maximus habitant dis vitae tortor. Sapien ridiculus tellus tortor leo magna class. Curabitur facilisi amet ex nam, sociosqu non. Mollis felis viverra eget dapibus curabitur sit. Taciti tempus praesent nascetur lacinia viverra ullamcorper, suscipit donec. Himenaeos orci luctus faucibus sapien neque euismod mattis molestie ridiculus. Dis amet ridiculus orci velit inceptos magnis sed placerat erat. Montes suscipit fringilla congue aliquam morbi montes turpis, mollis eros."

// Profiles (This is copied from profile views)
const kidsProf = ConstantLib.getKidsProfile(); 
const showONE = ConstantLib.getShows()[0];
const showTWO = ConstantLib.getShows()[0];

const smallShowArr = [showONE,showTWO]
const showALL = ConstantLib.getShows();
// Cam, look at you putting in refactored code


const Restrict = () => {


    return <>

  
  <Grid container direction={"column"} sx={{justifyContent:"center", alignItems:"center", marginBottom:3}}>

  <Box sx={{marginTop:2}}>
  <Typography variant="h2">Restrict</Typography>
  </Box>

<SearchBar/>
<Button sx={{backgroundColor:ColorPick.getSecondary(), color:"black"}}>Search</Button>
  {/* Gotta do a date and time selector */}
  

  <ChildSelect/>


{/* This is where we are start in day */}
  <HistoryCard day={"Results"} shows={[showONE]}/>




</Grid>




    </>
}

export default Restrict