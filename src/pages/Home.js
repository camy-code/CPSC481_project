import { Box, Button, Grid } from "@mui/material"
import ColorPick from "../tools/ColorPick"

import {Grid2 } from "@mui/material"

import { Link } from "react-router-dom";
import {Typography} from "@mui/material";



// I think this page should be the login/create account options
const Home = () => {
    return <>
    <Grid2   container
  direction="row"
  spacing={5}
  sx={{
    justifyContent: "center",
    alignItems: "center",
    marginTop:30
  }}>
    <Button component={Link} to="/login" sx={{
        width: 56, // Adjust size
        height: 56, 
        borderRadius: "50%", 
        minWidth: 0, // Prevents default button width
        padding:20,
        backgroundColor:ColorPick.getSecondary()
      }}><Typography sx={{color:"black"}}>Login</Typography></Button>
    <Button component={Link} to="/create"  sx={{
        width: 56, // Adjust size
        height: 56, 
        borderRadius: "50%", 
        minWidth: 0, // Prevents default button width
        padding:20,
        backgroundColor:ColorPick.getThird()
      }}><Typography sx={{color:"black"}}>Create</Typography></Button>
    </Grid2>
    
    </>
        
}

export default Home;
// I think this is how we do it

// Useful article on Box 
// https://mui.com/material-ui/react-box/?srsltid=AfmBOoq6lVkp410XmepUTrSB6ZMHQ6b-7_JVHiGst57I4P1kRnH2goLn