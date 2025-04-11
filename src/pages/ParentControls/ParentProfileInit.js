import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Avatar,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import ColorPick from "../../tools/ColorPick";
import { Add as AddIcon } from "@mui/icons-material";
import ExitButton from "../../components/menuComponents/ExitButton";

const ParentProfileInit = () => {
  const [profileName, setProfileName] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!profileName.trim()) {
      setError("Please enter a profile name");
      return;
    }
    // Check if we're coming from account creation
    const fromCreate = new URLSearchParams(location.search).get("fromCreate");
    navigate(fromCreate ? "/menu?newAccount=true" : "/menu");
  };

  return (
    <>
      <Box sx={{ margin: 3, paddingTop: 3 }}>
        <ExitButton to1="/login" label="Back" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          p: 3,
          bgcolor: "white",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            bgcolor: "white",
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ textAlign: "center", color: ColorPick.getPrimary() }}
          >
            Set Up Your Profile
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 3, textAlign: "center", color: "text.secondary" }}
          >
            Let's personalize your account
          </Typography>

          {error && (
            <Typography
              variant="body2"
              sx={{
                color: ColorPick.getErrorColor(),
                mb: 2,
                textAlign: "center",
              }}
            >
              {error}
            </Typography>
          )}

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mb: 3,
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
                    sx={{ mt: 1, color: "text.secondary" }}
                  >
                    Click to add profile picture
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12}>
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
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: ColorPick.getSecondary(),
                    "&:hover": {
                      backgroundColor: ColorPick.getSecondaryHOVER(),
                    },
                  }}
                >
                  Continue
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default ParentProfileInit;
