import React, { useState } from "react";
import { Box, Slider, TextField, Typography, Grid } from "@mui/material";

const TimeSlider = () => {
  const [hours, setHours] = useState(1); // Default 1 hour
  const [minutes, setMinutes] = useState(0); // Default 0 minutes

  // Converts hours & minutes to a single number (decimal hours) for the slider
  const totalHours = hours + minutes / 60;

  // Handles slider change
  const handleSliderChange = (_, newValue) => {
    const newHours = Math.floor(newValue);
    const newMinutes = Math.round((newValue - newHours) * 60);
    setHours(newHours);
    setMinutes(newMinutes);
  };

  // Handles text field changes
  const handleTimeChange = (event, isHour) => {
    let value = Number(event.target.value);
    if (isHour) {
      if (value < 0) value = 0;
      if (value > 24) value = 24; // Max 24 hours
      setHours(value);
    } else {
      if (value < 0) value = 0;
      if (value > 59) value = 59; // Max 59 minutes
      setMinutes(value);
    }
  };

  return (
    <Box sx={{ width: 400, textAlign: "center", p: 3 }}>
      <Typography variant="h6">Allowed Hours</Typography>

      {/* Slider */}
      <Slider
        value={totalHours}
        onChange={handleSliderChange}
        min={0}
        max={24}
        step={0.25} // Step in 15-minute increments
        sx={{ mt: 3 }}
      />

      {/* Time Inputs (Hours & Minutes) */}
      <Grid container spacing={5} justifyContent="center" marginTop={4}>
        <TextField
          label="Hours"
          type="number"
          value={hours}
          onChange={(e) => handleTimeChange(e, true)}
          variant="outlined"
          size="small"
          sx={{ width: "75px", marginRight:3 }}
        />
        <TextField
          label="Minutes"
          type="number"
          value={minutes}
          onChange={(e) => handleTimeChange(e, false)}
          variant="outlined"
          size="small"
          sx={{ width: "75px" }}
        />
      </Grid>
    </Box>
  );
};

export default TimeSlider;
