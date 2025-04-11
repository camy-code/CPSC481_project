import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Card,
  Snackbar,
  Alert,
} from "@mui/material";
import ColorPick from "../../tools/ColorPick";

const ChangePasswordDialog = ({ open, onClose }) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (password === "") {
      setError("Current password is empty!");
      return;
    }

    if (newPassword === confirmPassword) {
      setSuccess(true);
      setPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        onClose();
      }, 1000);
    } else {
      setError("Passwords do not match!");
    }
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <Card sx={{ padding: 2 }}>
            <TextField
              label="Current Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="New Password"
              type="password"
              fullWidth
              margin="normal"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <TextField
              label="Confirm New Password"
              type="password"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Card>
        </DialogContent>
        <DialogActions
          sx={{ display: "flex", justifyContent: "center", width: "95%" }}
        >
          <Button
            onClick={handleSubmit}
            sx={{
              padding: 1,
              backgroundColor: ColorPick.getSecondary(),
              color: "white",
              border: "3px solid black",
              "&:hover": {
                backgroundColor: ColorPick.getSecondaryHOVER(),
              },
            }}
          >
            Submit
          </Button>
          <Button
            onClick={onClose}
            sx={{
              padding: 1,
              backgroundColor: ColorPick.getThird(),
              color: "white",
              border: "3px solid black",
              "&:hover": {
                backgroundColor: ColorPick.getThirdHOVER(),
              },
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

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
          Password changed successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!error}
        autoHideDuration={3000}
        onClose={() => setError("")}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setError("")}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ChangePasswordDialog;
