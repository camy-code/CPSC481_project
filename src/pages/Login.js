import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ColorPick from "../tools/ColorPick";
import Grid from "@mui/material/Grid2";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // This is if we want to add some sort of
  };

  const [error, setError] = useState("None");

  let navigate = useNavigate();
  const handleLogin = () => {
    if (formData.password !== "123" || formData.email !== "cam") {
      setError("Incorrect password or email");
      return;
    }
    // TODO
    navigate("/menu");
  };

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
          Login
        </Typography>
        <Typography
          sx={{ color: error === "None" ? "white" : ColorPick.getErrorColor() }}
        >
          {error}
          {formData.email}
          {formData.password}
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

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2, backgroundColor: ColorPick.getSecondary() }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account? <Link to="/create">Create account</Link>
        </Typography>
      </Box>
    </Grid>
  );
};

export default Login;
