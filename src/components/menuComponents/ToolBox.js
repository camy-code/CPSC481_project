import Grid from "@mui/material/Grid2";
import { Card, CardMedia, CardContent, Box, IconButton, Button} from "@mui/material";

import { Link } from "react-router-dom";

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SettingsIcon from '@mui/icons-material/Settings';
import { Typography } from "@mui/material";

// The following is a list of all the icons we need
const iconList = [
    {compo:<AccessTimeIcon/>,label:"Screen time"},
    {compo:<WarningAmberIcon/>,label:"Restrict"},
    {compo:<AutoStoriesIcon/>,label:"History"},
    {compo:<SettingsIcon/>,label:"Acount"},

];

// TODO: use the URL arguement thing to determine which spot to take the person after clicking

const ToolBox = () => {
    return <>
    <Grid container direction={"row"} spacing={13} justifyContent="center" sx={{marginTop:4}}>
    {iconList.map((a)=><>
   
   <Box component={Link} to={"/parentlogin/" + a.label} sx={{textDecoration:"none"}}>
    <Grid container direction={"column"} spacing={0} alignItems={"center"} sx={{transform:"scale(2)"}}>
        
         <Box sx={{color:"black"}}>
        {a.compo}
        </Box>  
      
        <Typography color="black">{a.label}</Typography>
        
    </Grid>
    </Box>
    
    </>)}
    </Grid>
    </>
}
export default ToolBox;