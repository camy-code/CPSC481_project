import  Grid  from "@mui/material/Grid2";
import { Typography,Button } from "@mui/material";

const ParentHome = () => {
    return <>
    <Grid container direction={"column"} spacing={2}>
    <Grid
          container
          direction={"column"}
          sx={{ alignItems: "center" }}
        >
            <Typography variant="h2">Watch shows</Typography>
            <Button>Watch</Button>
        </Grid>

    <h2>This is where a parent can go into unrestricted access</h2>
    <h2>I am thinking that we have some sort of overview here but the most important part is that</h2>
    <h2>They can go into view mode</h2>
    </Grid>
    </>
}
export default ParentHome;