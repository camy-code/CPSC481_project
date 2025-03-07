import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import Box from "@mui/material";
import { Link } from "react-router-dom";


const ChildProfileSel = ({name, url, PAGE_LINK}) => {
    return <>
    <Card sx={{ width:300, height:375, textDecoration: "none"} } component={Link} to={PAGE_LINK}>
      <CardMedia
        component="img"
       
        width={200}
        height={300}
        image={url} // If in public folder
        alt="Sample Image"
    
      />
      <CardContent>
        <Typography variant="h5" sx={{textAlign:"center"}}>{name}</Typography>
      </CardContent>
    </Card>
    </>
}

export default ChildProfileSel;