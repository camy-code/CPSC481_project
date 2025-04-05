import Grid from "@mui/material/Grid2"
import { Card, CardContent, CardMedia, CardActions,Typography, Button, Box } from "@mui/material";
import ColorPick from "../../tools/ColorPick";

import { useState } from "react";

import RestrictDialog from "./RestrictDialog";

const HistoryCard = ({day, shows}) => {
  const [open, setOpen] = useState(false);
  
  const handleClose = () => {
    setOpen(false);
  }

    return <Grid container direction="column" alignItems="flex-start" marginTop={4} spacing={2}>
    <Typography variant="h4">{day}</Typography>
    
   
  
    {shows.map( (a) => (
         <Card sx={{ width: 500, display: "flex", flexDirection: "row" }}>
         {/* Content on the left */}
         <CardContent sx={{ flex: 1 }}>
           <Typography variant="h6">{a.title}</Typography>
           <Typography>Watched: 50 minutes</Typography> 
           {/* TODO: Still need to make dynamtic */}
           <Typography>Description</Typography>
           <Typography variant="body2">{a.desc}</Typography>

           <Typography sx={{marginTop:2}}>Rating: {a.rating}</Typography>
           <Typography>Age: {a.age}</Typography>
           <Typography>Genre: {a.genre}</Typography>
         </CardContent>
     
         {/* Image on the right */}
         <Box>
         <CardMedia
           component="img"
           sx={{ width: 250, height: 250, objectFit: "cover" }}
           image={a.thumbnail}
           alt="Random Image"
         />
       <CardActions sx={{ width: "100%", justifyContent: "center" }}>
        <a href="https://youtu.be/xvFZjo5PgG0?si=0lCLW7dj0U3F0guq" target="_blank" rel="noopener noreferrer">
         {/* Button to view trailer */}
         <Button sx={{ backgroundColor: ColorPick.getSecondary(), color: "black" }}>
           View trailer
         </Button>
         </a>
         <Button sx={{ backgroundColor: ColorPick.getThird(), color: "black" }} onClick={() => {setOpen(true)}}>
           Restrict
         </Button>
         {/* <RestrictDialog open={false} onClose={() => {}}/> This is what I am moving later */}
        <RestrictDialog open={open} onClose={handleClose} />

       </CardActions>
     </Box>
       </Card>
    ))}

    {/* Buttons at the bottom */}
  
  </Grid>
}

export default HistoryCard