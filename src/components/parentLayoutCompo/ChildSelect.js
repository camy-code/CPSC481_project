import ConstantLib from "../../tools/ConstantLib";
import ColorPick from "../../tools/ColorPick";

import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
const kidsProf = ConstantLib.getKidsProfile();

// !! Hello
// This still needs some work because right now I am manually setting whether
// someone is selected. The day got long and I became more lazy in terms of code
// quality so sorry -_-.

const ChildSelect = ({ onChange }) => {
  const [childIndex, setChildIndex] = useState(1);

  // Handle changes and notify parent components
  const handleChange = (index) => {
    setChildIndex(index);

    // Call the onChange prop if provided (for History and Restrict pages)
    if (onChange) {
      onChange(index);
    }

    // Also dispatch a custom event for ScreenTime component
    const selectedChildName = kidsProf[index].name;
    const event = new CustomEvent("childSelected", {
      detail: selectedChildName,
      bubbles: true,
    });
    document.dispatchEvent(event);
  };

  // Set default selection on mount
  useEffect(() => {
    if (
      kidsProf.length > 0 &&
      childIndex >= 0 &&
      childIndex < kidsProf.length
    ) {
      // Call onChange for initial selection if provided
      if (onChange) {
        onChange(childIndex);
      }

      // Also dispatch event for ScreenTime component
      const event = new CustomEvent("childSelected", {
        detail: kidsProf[childIndex].name,
        bubbles: true,
      });
      document.dispatchEvent(event);
    }
  }, []);

  return (
    <>
      <Grid container direction={"row"} marginTop={5} spacing={4}>
        {kidsProf.map((prof, index) => (
          <Box key={prof.name}>
            <Grid
              container
              direction={"column"}
              alignItems={"center"}
              spacing={1}
            >
              <Box
                onClick={() => {
                  handleChange(index);
                }}
                sx={{
                  width: 150, // Set the width of the box
                  height: 150, // Set the height of the box

                  display: "flex",
                  justifyContent: "center", // Center the image horizontally
                  alignItems: "center", // Center the image vertically
                  border:
                    index === childIndex
                      ? "8px solid" + ColorPick.getThird()
                      : "8px solid transparent",
                  borderRadius: "50%",
                  "&:hover": {
                    border: "8px solid " + ColorPick.getThirdHOVER(),
                    borderRadius: "50%",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={prof.imageURL}
                  alt="example"
                  style={{
                    width: "100%", // Make the image fill the box width
                    height: "100%", // Make the image fill the box height
                    objectFit: "cover", // Crop the image to fit the box
                    borderRadius: "50%",
                    //  border: (index ===childIndex ) ? '8px solid' + ColorPick.getThird() : '',
                  }}
                />
              </Box>
              <Typography variant="h6" fontSize={30}>
                {prof.name}
              </Typography>
            </Grid>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default ChildSelect;
