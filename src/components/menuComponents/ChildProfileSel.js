import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import { Link } from "react-router-dom";

const ChildProfileSel = ({ name, url, PAGE_LINK }) => {
  return (
    <>
      <Card
        sx={{ width: 250, height: 310, textDecoration: "none",padding:2}} // Reduce size but keep proportions
        component={Link}
        to={PAGE_LINK}
      >
        <CardMedia
          component="img"
          image={url}
          alt="Profile Image"
          sx={{
            width: "250px",
            height: "250px",
          
          //  objectFit: "contain",
            borderRadius: "10px",
          }}
        />
        <CardContent>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {name}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ChildProfileSel;
