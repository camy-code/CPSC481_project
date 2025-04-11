import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import ColorPick from "../../tools/ColorPick";

const ChildProfileSel = ({ name, url, PAGE_LINK, isParent }) => {
  return (
    <>
      <Card
        sx={{
          width: 250,
          height: 310,
          textDecoration: "none",
          padding: 2,
          backgroundColor: isParent ? "#f5d742" : "white", // Gold background for parent
          "&:hover": {
            backgroundColor: isParent ? "#e8af3a" : ColorPick.getMenuHover(),
          },
        }}
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
