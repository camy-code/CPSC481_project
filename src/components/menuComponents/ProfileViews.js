import Grid from "@mui/material/Grid2";

import { Card, CardMedia, CardContent, Box, IconButton} from "@mui/material";

// add button
import ChildProfileSel from "./ChildProfileSel";

import AddIcon from '@mui/icons-material/Add';

// Profiles
const kidsProf = [
    { name: "Cam", imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjStDrFOPPPRG4vqUB28jlvvP_cPioFuqDA&s" },
    { name: "Dawson", imageURL:"https://pbs.twimg.com/media/FH5Iq-VWYAMxYCQ.jpg" },
    

];

// Parent mode


const ProfileViews = () => {
    


  return <Grid container direction={"row"} spacing={2} justifyContent="center">
 
    {kidsProf.map((a)=><ChildProfileSel name={a.name} url={a.imageURL} PAGE_LINK={"/childmain"}/>)}

    <ChildProfileSel name={"Parent"} url={"https://cdn-icons-png.freepik.com/512/9307/9307950.png"} PAGE_LINK={"/parentlogin"}/>

    <ChildProfileSel name={"Add User"} url={"https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4="} PAGE_LINK={"/"}/>
  
    </Grid>

    // Time for the add button
  
};

export default ProfileViews;
