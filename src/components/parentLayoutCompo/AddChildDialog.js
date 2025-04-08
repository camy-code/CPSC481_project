import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import ColorPick from "../../tools/ColorPick";
import { Add as AddIcon } from "@mui/icons-material";

const AddChildDialog = ({ open, onClose }) => {
  const [profileName, setProfileName] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState("");

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!profileName.trim()) {
      setError("Please enter a profile name");
      return;
    }
    // Here you would typically save the profile data
    onClose();
  };

  const handleClose = () => {
    setProfileName("");
    setProfilePicture(null);
    setError("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ textAlign: "center", pb: 0 }}>
        Add Child Profile
      </DialogTitle>

      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: 2,
          }}
        >
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="profile-picture-input"
            type="file"
            onChange={handleProfilePictureChange}
          />
          <label htmlFor="profile-picture-input">
            <Button
              component="span"
              sx={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                backgroundColor: "#f5f5f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              <Avatar
                src={profilePicture}
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                {!profilePicture && (
                  <AddIcon
                    sx={{
                      fontSize: 40,
                      color: "#757575",
                    }}
                  />
                )}
              </Avatar>
            </Button>
          </label>
          <Typography
            variant="body2"
            sx={{ mt: 1, mb: 2, color: "text.secondary" }}
          >
            Click to add profile picture
          </Typography>

          <TextField
            fullWidth
            label="Profile Name"
            value={profileName}
            onChange={(e) => {
              setProfileName(e.target.value);
              if (error) setError("");
            }}
            error={!!error}
            helperText={error}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ padding: 2, justifyContent: "center" }}>
        <Button
          onClick={handleSubmit}
          sx={{
            padding: 1,
            backgroundColor: ColorPick.getSecondary(),
            color: "white",
            "&:hover": {
              backgroundColor: ColorPick.getSecondaryHOVER(),
            },
            border: "3px solid black",
          }}
        >
          Add Profile
        </Button>
        <Button
          onClick={handleClose}
          sx={{
            padding: 1,
            backgroundColor: ColorPick.getThird(),
            color: "white",
            "&:hover": {
              backgroundColor: ColorPick.getThirdHOVER(),
            },
            border: "3px solid black",
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddChildDialog;
