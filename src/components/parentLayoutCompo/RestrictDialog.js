import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Card,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import ColorPick from "../../tools/ColorPick";
import { useState } from "react";

const RestrictDialog = ({ open, onClose }) => {
  const [success, setSuccess] = useState(false);

  const handleNO = () => {
    setSuccess(true);
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <Typography>Are you sure you want to restrict this show?</Typography>
        </DialogContent>

        <DialogActions
          sx={{ display: "flex", justifyContent: "center", width: "95%" }}
        >
          <Button
            onClick={handleNO}
            sx={{
              padding: 1,
              backgroundColor: ColorPick.getSecondary(),
              color: "white",
              "&:hover": { backgroundColor: ColorPick.getSecondaryHOVER() },
              border: "3px solid black",
            }}
          >
            Yes
          </Button>
          <Button
            onClick={onClose}
            sx={{
              padding: 1,
              backgroundColor: ColorPick.getThird(),
              color: "white",
              "&:hover": { backgroundColor: ColorPick.getThirdHOVER() },
              border: "3px solid black",
            }}
          >
            No
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
          Show restricted successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default RestrictDialog;
