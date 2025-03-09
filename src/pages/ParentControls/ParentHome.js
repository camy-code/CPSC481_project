import  Grid  from "@mui/material/Grid2";
import { Typography,Button } from "@mui/material";

import ColorPick from "../../tools/ColorPick";
import { Link } from "react-router-dom";

const ParentHome = () => {
    return <>

<Grid
  container
  direction="column"
  sx={{
    height: "70vh", // Full viewport height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Typography variant="h2">Welcome!</Typography>
 <Button component={Link} to="/parentmain" sx={{backgroundColor:ColorPick.getSecondary(), padding:1, color:"black", height:40, width:80}}>Watch</Button>
  
</Grid>


   
    </>
}
export default ParentHome;