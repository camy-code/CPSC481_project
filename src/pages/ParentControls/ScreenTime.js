import Grid from "@mui/material/Grid2";
import { Box, Button, Typography, Snackbar, Alert } from "@mui/material";
import ColorPick from "../../tools/ColorPick";
import ChildSelect from "../../components/parentLayoutCompo/ChildSelect";

// These  are my card imports
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";
import TimeSlider from "../../components/parentLayoutCompo/TimeSlider";
import { useState, useEffect } from "react";
import { saveTimeLimit } from "../../tools/StorageUtils";

// add a button thing so it is cleaner

const ScreenTime = () => {
  const [success, setSuccess] = useState(false);
  const [selectedChild, setSelectedChild] = useState(null);
  const [timeValue, setTimeValue] = useState(120);

  const handleChildSelect = (index, childName) => {
    setSelectedChild(childName);
  };

  const handleTimeChange = (hours, minutes) => {
    // Convert to total minutes
    const totalMinutes = hours * 60 + minutes;
    setTimeValue(totalMinutes);
  };

  const handleConfirm = () => {
    if (selectedChild) {
      // Save the time limit for the selected child
      saveTimeLimit(selectedChild, timeValue);
      setSuccess(true);
    }
  };

  return (
    <Box sx={{ height: "100vh", overflow: "auto", padding: 2 }}>
      <Grid
        container
        direction={"column"}
        sx={{ justifyContent: "center", alignItems: "center", marginBottom: 3 }}
      >
        <Typography variant="h2">Screen Time</Typography>

        <ChildSelect onChildSelect={handleChildSelect} />

        <Grid
          container
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            marginTop: 6,
            marginBottom: 8,
          }}
        >
          <Grid container direction={"column"} marginBottom={2}>
            <TimeSlider onTimeChange={handleTimeChange} />
          </Grid>
        </Grid>

        <Button
          sx={{
            backgroundColor: ColorPick.getSecondary,
            paddingLeft: 2,
            paddingRight: 2,
            color: "white",
            width: 150,
            height: 75,
            fontSize: 30,
            textTransform: "none",
            borderRadius: 5,
            border: "3px solid black",
            "&:hover": {
              backgroundColor: ColorPick.getSecondaryHOVER(),
            },
            margin: 0,
            position: "relative",
          }}
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </Grid>

      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Screen time saved successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ScreenTime;
