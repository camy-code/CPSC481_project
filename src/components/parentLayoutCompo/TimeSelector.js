import { Typography, Box, Button, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ConstantLib from "../../tools/ConstantLib";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ColorPick from "../../tools/ColorPick";

import { useState } from "react";

const getArrow = (i, addDate,minusDate) => {
  const style123 = {
    fontSize: 100,
    color: ColorPick.getSecondary(),
    ":hover": { color: ColorPick.getSecondaryHOVER() },
    
  };


  return (
    <>
      <IconButton
      
        disableRipple
        onClick={() => {
          if (i === 0) {
            minusDate();
          } else {
            addDate();
          }
        }}
      >
        {i === 0 ? (
          <ArrowLeftIcon sx={style123} />
        ) : (
          <ArrowRightIcon sx={style123} />
        )}
      </IconButton>
    </>
  );
};

const TimeSelector = () => {

  const dateRanges = [
    "April 6–12",
    "April 13–19",
    "April 20–26"
  ];
  
  const [dateIndex, setDateIndex] = useState(1);

  const addDate = () => {
    if (dateIndex < dateRanges.length - 1) {
      setDateIndex(dateIndex + 1);
    }
  }

  const subtractDate = () => {
    if (dateIndex > 0) {
      setDateIndex(dateIndex - 1);
    }
  }

  return (
    <>
      <Grid container direction={"column"} alignItems={"center"}>
        <Grid container direction={"row"} alignItems={"center"} spacing={3}>
          {getArrow(0,  addDate,subtractDate)}
          <Box padding={5}>
            <Typography variant="h4" sx={{ width:250,textAlign:"center"}}>{dateRanges[dateIndex]}</Typography>
          </Box>
          {getArrow(1, addDate,subtractDate)}
        </Grid>

        <Button
          sx={{
            backgroundColor: ColorPick.getSecondary(),
            padding: 1,
            transform: "scale(1.5)",
            width: 120,
            fontSize: 40,
            color: "white",
            textTransform: "none",
            ":hover": {
              backgroundColor: ColorPick.getSecondary(),
            },
            border:"2px solid black"
          }}
          onClick={() => {
            setDateIndex(1);
          }}
        >
          <Typography>Now</Typography>
        </Button>
      </Grid>
    </>
  );
};

export default TimeSelector;

// Cam, for the love of coffee, you need to specify that a grid is a container!!
