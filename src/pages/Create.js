import { useState } from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ColorPick from "../tools/ColorPick";

import { useNavigate } from "react-router-dom";

const Create = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    pin: "",
    confirmPin: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  };

  // Time to do the nav stuff
  const navigate = useNavigate();

  const handleMenu = () => {
    // TODO:

    if (formData.confirmPassword !== formData.password) {
      setError("Passwords do not match!");
      return;
    } else if (formData.confirmPin !== formData.pin) {
      setError("Pins do not match!");
      return;
    } else if (formData.pin.length !== 4) {
      setError("Pin must be  4 characters long!");
      return;
    } else if (formData.email === "") {
      setError("Email cannot be empty!");
      return;
    } else if (formData.pin === "") {
      setError("Pin cannot be empty!");
      return;
    } else if (formData.password === "") {
      setError("Password cannot be empty!");
      return;
    } else if (formData.email === "") {
      setError("Email cannot be empty!");
      return;
    } else {
      navigate("/menu");
    }
  };

  const [error, setError] = useState("None");

  return (
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
        <Typography variant="h5" mb={2}>
          Create Account
        </Typography>

        <Typography
          variant="body2"
          color="error"
          sx={{
            mt: -1,
            color: error === "None" ? "white" : ColorPick.getColor(),
          }}
        >
          {error}
        </Typography>

        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
        />

        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          fullWidth
          margin="normal"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <TextField
          label="Pin"
          name="pin"
          type="password"
          fullWidth
          margin="normal"
          value={formData.pin}
          onChange={handleChange}
        />

        <TextField
          label="Confirm Pin"
          name="confirmPin"
          type="password"
          fullWidth
          margin="normal"
          value={formData.confirmPin}
          onChange={handleChange}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2, backgroundColor: ColorPick.getSecondary() }}
          onClick={handleMenu}
        >
          Create Account
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Box>
    </Grid>
  );
};

export default Create;
