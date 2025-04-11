import Grid from "@mui/material/Grid2";
import {
  Box,
  Button,
  Typography,
  Snackbar,
  Alert,
  Switch,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import ColorPick from "../../tools/ColorPick";
import ChildSelect from "../../components/parentLayoutCompo/ChildSelect";
import ConstantLib from "../../tools/ConstantLib";

// These  are my card imports
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";
import TimeSlider from "../../components/parentLayoutCompo/TimeSlider";
import { useState, useEffect } from "react";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { saveTimeLimit } from "../../tools/StorageUtils";

// add a button thing so it is cleaner

const LOCKED_PROFILES_KEY = "kiddoflix_locked_profiles";

// Get locked status for profile
export const getProfileLockStatus = (profileName) => {
  try {
    const lockedProfiles = JSON.parse(
      localStorage.getItem(LOCKED_PROFILES_KEY) || "[]"
    );
    return lockedProfiles.includes(profileName);
  } catch (error) {
    console.error("Error checking lock status:", error);
    return false;
  }
};

// Set lock status for profile
export const setProfileLockStatus = (profileName, isLocked) => {
  try {
    const lockedProfiles = JSON.parse(
      localStorage.getItem(LOCKED_PROFILES_KEY) || "[]"
    );

    if (isLocked && !lockedProfiles.includes(profileName)) {
      lockedProfiles.push(profileName);
    } else if (!isLocked && lockedProfiles.includes(profileName)) {
      const index = lockedProfiles.indexOf(profileName);
      lockedProfiles.splice(index, 1);
    }

    localStorage.setItem(LOCKED_PROFILES_KEY, JSON.stringify(lockedProfiles));
  } catch (error) {
    console.error("Error setting lock status:", error);
  }
};

const ScreenTime = () => {
  const [success, setSuccess] = useState(false);
  const [selectedChild, setSelectedChild] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [timeValue, setTimeValue] = useState(60); // Default time limit in minutes

  // Listen for child selection changes from ChildSelect component
  useEffect(() => {
    const handleChildSelectChange = (event) => {
      setSelectedChild(event.detail);
      // Load lock status when child changes
      if (event.detail) {
        const lockStatus = getProfileLockStatus(event.detail);
        setIsLocked(lockStatus);
      }
    };

    window.addEventListener("childSelected", handleChildSelectChange);
    return () =>
      window.removeEventListener("childSelected", handleChildSelectChange);
  }, []);

  // Handle child selection via direct prop
  const handleChildSelect = (index) => {
    const selectedChildName = ConstantLib.getKidsProfile()[index].name;
    setSelectedChild(selectedChildName);

    // Load lock status when child changes
    if (selectedChildName) {
      const lockStatus = getProfileLockStatus(selectedChildName);
      setIsLocked(lockStatus);
    }
  };

  // Handle time slider changes
  const handleTimeChange = (hours, minutes) => {
    // Convert to total minutes
    const totalMinutes = hours * 60 + minutes;
    setTimeValue(totalMinutes);
  };

  const handleLockToggle = () => {
    if (selectedChild) {
      const newLockState = !isLocked;
      setIsLocked(newLockState);
      setProfileLockStatus(selectedChild, newLockState);
    }
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

        <ChildSelect onChange={handleChildSelect} />

        {/* Time Slider Section */}
        <Grid
          container
          direction={"column"}
          sx={{
            width: "100%",
            maxWidth: 600,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Daily Time Limit
          </Typography>
          <TimeSlider onTimeChange={handleTimeChange} />
        </Grid>

        {/* Lock Toggle Button */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: 600,
            marginTop: 3,
            marginBottom: 5,
            border: "2px solid black",
            borderRadius: 3,
            padding: 3,
            backgroundColor: isLocked
              ? "rgba(255, 0, 0, 0.1)"
              : "rgba(0, 255, 0, 0.1)",
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 1 }}>
            Account Access
          </Typography>

          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={isLocked}
                  onChange={handleLockToggle}
                  color="warning"
                  disabled={!selectedChild}
                />
              }
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {isLocked ? (
                    <LockIcon sx={{ marginRight: 1 }} />
                  ) : (
                    <LockOpenIcon sx={{ marginRight: 1 }} />
                  )}
                  <Typography>
                    {isLocked
                      ? "Account Locked (Inaccessible)"
                      : "Account Unlocked (Accessible)"}
                  </Typography>
                </Box>
              }
            />
          </FormGroup>

          <Typography
            variant="body2"
            sx={{ marginTop: 1, fontStyle: "italic" }}
          >
            {isLocked
              ? "Child will be redirected to kickout screen when trying to access their account"
              : "Child can access their account normally"}
          </Typography>
        </Box>

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
            marginTop: 2,
            "&:hover": {
              backgroundColor: ColorPick.getSecondaryHOVER(),
            },
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
