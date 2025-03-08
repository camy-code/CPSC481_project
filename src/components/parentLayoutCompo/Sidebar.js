import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import ExitButton from "../menuComponents/ExitButton";

import { Link } from "react-router-dom";

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SettingsIcon from '@mui/icons-material/Settings';
import ColorPick from "../../tools/ColorPick";


const iconList = [
    {compo:<SettingsIcon/>,label:"Acount", link:"/acount"},
    {compo:<AutoStoriesIcon/>,label:"History", link:"/history"},
    {compo:<WarningAmberIcon/>,label:"Restrict", link:"/restrict"},
  {compo:<AccessTimeIcon/>,label:"Screen time", link:"/screentime"},
  
  
  

];

const Sidebar = () => {
    return <Box sx={{ padding:4}}>
        <Grid container direction={"column"} spacing={3}>

       
        <ExitButton to1="/menu"/>
        
        {iconList.map(
            (a) => (
                <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", gap:1, textDecoration:"None", color:"black", backgroundColor:ColorPick.getThird(), padding:1, borderRadius:10}} component={Link} to={a.link}>
                {a.compo}
                <h1>{a.label}</h1>
                
                </Box>
            )
        )}


        </Grid>

    </Box>
}
export default Sidebar;