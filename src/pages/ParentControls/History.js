import { Typography, Box, CardHeader } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { Card, CardContent, CardMedia, CardActions, Button } from "@mui/material";


// The following are the componets that I need to import
import TimeSelector from "../../components/parentLayoutCompo/TimeSelector";
import ChildSelect from "../../components/parentLayoutCompo/ChildSelect";

import { useState } from "react";
import ConstantLib from "../../tools/ConstantLib";
import ColorPick from "../../tools/ColorPick";
import HistoryCard from "../../components/parentLayoutCompo/HistoryCard";

const sampleDesc = "Lorem ipsum odor amet, consectetuer adipiscing elit. Vehicula rutrum orci vulputate ut ultrices varius. Morbi dapibus suscipit senectus maximus habitant dis vitae tortor. Sapien ridiculus tellus tortor leo magna class. Curabitur facilisi amet ex nam, sociosqu non. Mollis felis viverra eget dapibus curabitur sit. Taciti tempus praesent nascetur lacinia viverra ullamcorper, suscipit donec. Himenaeos orci luctus faucibus sapien neque euismod mattis molestie ridiculus. Dis amet ridiculus orci velit inceptos magnis sed placerat erat. Montes suscipit fringilla congue aliquam morbi montes turpis, mollis eros."

// Profiles (This is copied from profile views)
const kidsProf = ConstantLib.getKidsProfile(); 
const showONE = ConstantLib.getShows()[0];
const showTWO = ConstantLib.getShows()[1];
const showTHREE = ConstantLib.getShows()[2];
const showFOUR = ConstantLib.getShows()[3];

const smallShowArr = [showONE,showTWO]
const showALL = ConstantLib.getShows();
// Cam, look at you putting in refactored code


const History = () => {
  const [showIndex, setShowIndex] = useState(0);
  const [childIndex, setChildIndex] = useState(0);

    return <>

  
  <Grid container direction={"column"} sx={{justifyContent:"center", alignItems:"center", marginBottom:3}}>

  <Box sx={{marginTop:2}}>
  <Typography variant="h2">History</Typography>
  </Box>

  {/* Gotta do a date and time selector */}
  <TimeSelector onChange={(time)=>setShowIndex(time)}/>

  <ChildSelect onChange={(child)=> setChildIndex(child)}/>


  {
  //conditional render the shows
  (childIndex === 0) ? (showIndex===2) ? <HistoryCard day={"Wendesay"} shows={[showFOUR]}/>:<HistoryCard day={"Thursday"} shows={[showTHREE]}/>: null
}

{
  //conditional render the shows
  (childIndex === 1) ? (showIndex===2) ? <HistoryCard day={"Monday"} shows={smallShowArr}/>:<HistoryCard day={"Tuesday"} shows={[showONE]}/>: null
}

  


</Grid>




    </>
}

export default History