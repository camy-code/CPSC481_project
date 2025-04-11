import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

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
          border: isParent ? "3px solid #d4af37" : "none", // Gold border for parent
          boxShadow: isParent
            ? "0 0 15px rgba(212, 175, 55, 0.5)"
            : "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)", // Enhanced glow for parent
          transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
          position: "relative", // Important for absolute positioning of the label
          "&:hover": {
            backgroundColor: isParent ? "#e8af3a" : ColorPick.getMenuHover(),
            transform: "scale(1.03)",
            boxShadow: isParent
              ? "0 0 20px rgba(212, 175, 55, 0.7)"
              : "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
          },
        }}
        component={Link}
        to={PAGE_LINK}
      >
        {isParent && (
          <Box
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              backgroundColor: "#9c27b0", // Purple background for high contrast
              color: "white",
              fontWeight: "bold",
              fontSize: "12px", // Slightly larger font
              padding: "4px 8px", // Larger padding
              borderRadius: "4px",
              zIndex: 10,
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)", // Add shadow for depth
              letterSpacing: "0.5px", // Improved readability
            }}
          >
            PARENT
          </Box>
        )}
        <CardMedia
          component="img"
          image={url}
          alt="Profile Image"
          sx={{
            width: "250px",
            height: "250px",
            borderRadius: "10px",
            border: isParent ? "2px solid #d4af37" : "none", // Gold border for parent image
          }}
        />
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontWeight: isParent ? "bold" : "normal", // Bold text for parent
              color: isParent ? "#7c6608" : "inherit", // Darker gold text for parent
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ChildProfileSel;
