import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Card,
} from "@mui/material";
import ColorPick from "../../tools/ColorPick";

const ChangePasswordDialog = ({ open, onClose }) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");
    if (password === "") {
      alert("Current password is empty!");
    return;}


    if (newPassword === confirmPassword) {
      console.log("Password changed successfully");
      alert("Changed successfully");
      // Here you can add the logic to change the password
      onClose(); // Close the dialog on successful password change
    } else {
      console.log("Passwords do not match!");
      // Handle error (e.g., show a warning)
      alert("Password does not match");
    }
  };

  return (
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
            border:"3px solid black",
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
            border:"3px solid black",
            "&:hover": {
              backgroundColor: ColorPick.getThirdHOVER(),
            },
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChangePasswordDialog;
