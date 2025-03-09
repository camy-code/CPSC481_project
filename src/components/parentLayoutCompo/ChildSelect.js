import ConstantLib from "../../tools/ConstantLib";
import ColorPick from "../../tools/ColorPick";

import { useState } from "react";
import Grid from "@mui/material/Grid2"
import { Box,Typography } from "@mui/material";
const kidsProf = ConstantLib.getKidsProfile(); 

// !! Hello
  // This still needs some work because right now I am manually setting whether 
  // someone is selected. The day got long and I became more lazy in terms of code 
  // quality so sorry -_-.

const ChildSelect = () => {
  const [select, setSelect] = useState(true)

  return <>
  <Grid container direction={"row"} marginTop={5} spacing={4}>
  
  
  {kidsProf.map( (prof,index) => (
   <Box>
   <Grid container direction={"column"} alignItems={"center"} >
   <Box
     sx={{
       width: 150,         // Set the width of the box
       height: 150,        // Set the height of the box
      
       display: 'flex',
       justifyContent: 'center',  // Center the image horizontally
       alignItems: 'center',      // Center the image vertically
       
     }}
   >
     <img
       src={prof.imageURL}
       alt="example"
       style={{
         width: '100%',     // Make the image fill the box width
         height: '100%',    // Make the image fill the box height
         objectFit: 'cover', // Crop the image to fit the box
         borderRadius:"50%",
         border: (index ===0) ? '8px solid' + ColorPick.getThird() : '',
       }}
     />
   </Box>
       <Typography variant="h6" fontSize={30}>{prof.name}</Typography>
   </Grid>
  </Box>
  
  
  ))}
    
  </Grid>
  </>
}


export default ChildSelect