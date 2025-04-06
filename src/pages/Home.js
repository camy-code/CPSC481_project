import {  Button } from "@mui/material"
import ColorPick from "../tools/ColorPick"

import {Grid2 } from "@mui/material"

import { Link } from "react-router-dom";
import {Typography} from "@mui/material";

import { useNavigate } from "react-router-dom";

// I am sorry for the person who needs to read this code. It so desperately needs to be refactored but IDC

// I think this page should be the login/create account options
const Home = () => {

  let navigate = useNavigate();
  const handleClick = (loc) => {
    navigate(loc);
  }

    return <>
    <Grid2   container
  direction="row"
  spacing={5}
  sx={{
    justifyContent: "center",
    alignItems: "center",
    marginTop:30
  }}>
    <Button sx={{
        width: 56, // Adjust size
        height: 56, 
        borderRadius: "50%", 
        minWidth: 0, // Prevents default button width
        padding:20,
        backgroundColor:ColorPick.getSecondary(),
        border:"3px solid black",
        textTransform:"none",
        "&:hover": {
            backgroundColor: ColorPick.getHoverCol(), // Change this later
          }
      }}><Typography sx={{color:ColorPick.getTextCol(), fontSize:"3rem"}}>Login</Typography></Button>
    <Button component={Link} to="/create"  sx={{
        width: 56, // Adjust size
        height: 56, 
        borderRadius: "50%", 
        minWidth: 0, // Prevents default button width
        padding:20,
        backgroundColor:ColorPick.getThird(),
        border:"3px solid black",
        textTransform:"none",
        "&:hover": {
            backgroundColor: ColorPick.getHoverCol(), // Change this later
          }
      }}><Typography sx={{color:ColorPick.getTextCol(), fontSize:"3rem"}}>Create</Typography></Button>
    </Grid2>
    
    </>
        
}

export default Home;
// I think this is how we do it

// Useful article on Box 
// https://mui.com/material-ui/react-box/?srsltid=AfmBOoq6lVkp410XmepUTrSB6ZMHQ6b-7_JVHiGst57I4P1kRnH2goLn