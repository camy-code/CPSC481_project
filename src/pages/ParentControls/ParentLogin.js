import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ColorPick from "../../tools/ColorPick";
import Grid from "@mui/material/Grid2";

import { useNavigate } from "react-router-dom";

import ExitButton from "../../components/menuComponents/ExitButton";

import { useParams } from "react-router-dom";
const ParentLogin = () => {
  const { mode } = useParams();
  const id = decodeURIComponent(mode);

  // The following is for logging in variables
  const [formData, setFormData] = useState({
    pin: "",
  });

  const [error, setError] = useState("None");

  const handleChange = (e) => {
    if (e.target.value.length > 4) {
      return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // This is if we want to add some sort of
  };

  // The folowing is to figure out which page to move to

  const pageMover = (answer) => {
    if (answer === "History") {
      return "/history";
    } else if (answer === "Screen time") {
      return "/screentime";
    } else if (answer === "Restrict") {
      return "/restrict";
    } else if (answer === "reg") {
      return "/parentmain";
    } else {
      return "/acount";
    }
  };
  // Time for the moving
  const navigate = useNavigate();

  // This is the function that will be used to move to the next page
  const handleMove = (page) => {
    const isNumeric = (string) => /^[+-]?\d+(\.\d+)?$/.test(string);

    let pin = formData.pin;
    if (pin === "") {
      setError("Please enter your PIN");
      return;
    } else if (pin.length < 4) {
      setError("PIN must be 4 digits long");
      return;
    } else if (isNumeric(pin) === false) {
      setError("PIN must contain only numbers");
      return;
    } else if (pin !== "1234") {
      setError("Incorrect PIN. Please try again.");
      return;
    } else {
      setError("None");
      navigate(page);
    }
  };

  return (
    <>
      <Box sx={{ margin: 3, paddingTop: 3 }}>
        <ExitButton to1="/menu" label="Go Back" />
      </Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: "80vh" }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            width: "300px",
            textAlign: "center",
            bgcolor: "white",
          }}
        >
          <Typography variant="h5" mb={3}>
            Parent sign in
          </Typography>

          <TextField
            label="Pin"
            name="pin"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={formData.pin}
            onChange={handleChange}
            InputLabelProps={{ required: false }}
            error={error !== "None"}
            helperText={error !== "None" ? error : ""}
            sx={{
              "& .MuiInputBase-input": {
                fontSize: "1.5rem",
                textAlign: "center",
                height: "40px",
              },
              "& .MuiInputLabel-root": {
                fontSize: "1.2rem",
              },
              mb: 3,
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: ColorPick.getSecondary(),
              "&:hover": {
                backgroundColor: ColorPick.getSecondaryHOVER(),
              },
              height: "45px",
              fontSize: "1.2rem",
            }}
            onClick={() => handleMove(pageMover(id))}
          >
            Login
          </Button>

          <Typography
            variant="body1"
            mt={2}
            sx={{
              color: error === "None" ? "white" : ColorPick.getErrorColor(),
              fontSize: "1.1rem",
              minHeight: "24px",
            }}
          >
            {error}
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default ParentLogin;

// Gotta work on some of the work stuff
