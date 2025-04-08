import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Card,
  Typography,
} from "@mui/material";
import ColorPick from "../../tools/ColorPick";
import Box from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddChildDialog = ({ open, onClose }) => {
  const [name, setName] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = () => {
    setName("");
    setSelectedImage(null);

    alert("New child added");
    onClose();
  };

  // Handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Create an object URL for the image
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Child</DialogTitle>
      <DialogContent>
        <Card sx={{ padding: 2 }}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="file-upload"
            onChange={handleFileSelect}
          />
          <Button
            sx={{
              backgroundColor: ColorPick.getSecondary(),
              padding: 1,
              color: "white",
              display: "flex",
              "&:hover": {
                backgroundColor: ColorPick.getSecondaryHOVER(),
              },
              border: "3px solid black",
            }}
            component="label"
            htmlFor="file-upload"
          >
            Select Image
          </Button>
        </Card>
      </DialogContent>
      <DialogActions
        sx={{ display: "flex", justifyContent: "center", width: "80%" }}
      >
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
          Submit
        </Button>

        <Button
          onClick={onClose}
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
