import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import ExitButton from "../menuComponents/ExitButton";

import { Link } from "react-router-dom";

// The following are my icon imports
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';

import ColorPick from "../../tools/ColorPick";


const iconList = [
    {compo:<HomeIcon/>,label:"Home", link:"/parenthome"},
   
    {compo:<AutoStoriesIcon/>,label:"History", link:"/history"},
    {compo:<WarningAmberIcon/>,label:"Restrict", link:"/restrict"},
  {compo:<AccessTimeIcon/>,label:"Screen time", link:"/screentime"},
  {compo:<SettingsIcon/>,label:"Account", link:"/acount"},
  
  
  

];

const Sidebar = () => {
    return <Box sx={{ padding:4}}>
        <Grid container direction={"column"} spacing={2}>

       
        <ExitButton to1="/menu"/>
        
        {iconList.map(
            (a) => (
                <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", gap:1, textDecoration:"None", color:"white", backgroundColor:ColorPick.getThird(), padding:1, borderRadius:10,
                    "&:hover":{
                        backgroundColor:ColorPick.getThirdHOVER()
                    },
                    border:"3px solid black",
                }} component={Link} to={a.link} onClick={() => {}} >
                {a.compo}
                <h1>{a.label}</h1>
                
                </Box>
            )
        )}


        </Grid>

    </Box>
}
export default Sidebar;