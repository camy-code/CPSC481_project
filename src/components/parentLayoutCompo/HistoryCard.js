import Grid from "@mui/material/Grid2"
import { Card, CardContent, CardMedia, CardActions,Typography, Button, Box } from "@mui/material";
import ColorPick from "../../tools/ColorPick";

const HistoryCard = ({day, shows}) => {
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
         </CardContent>
     
         {/* Image on the right */}
         <Box>
         <CardMedia
           component="img"
           sx={{ width: 250, height: 250, objectFit: "cover" }}
           image="https://source.unsplash.com/random"
           alt="Random Image"
         />
       <CardActions sx={{ width: "100%", justifyContent: "center" }}>
         <Button sx={{ backgroundColor: ColorPick.getSecondary(), color: "black" }}>
           View trailer
         </Button>
         <Button sx={{ backgroundColor: ColorPick.getThird(), color: "black" }}>
           Restrict
         </Button>
       </CardActions>
     </Box>
       </Card>
    ))}

    {/* Buttons at the bottom */}
  
  </Grid>
}

export default HistoryCard