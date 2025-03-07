import { useState } from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ColorPick from "../tools/ColorPick";

const Create = () => {
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
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Account Created!");
  };

  

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
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
        
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          required
          value={formData.email}
          onChange={handleChange}
        />
        
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          required
          value={formData.password}
          onChange={handleChange}
        />
        
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          fullWidth
          margin="normal"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2,backgroundColor:ColorPick.getSecondary() }} component={Link} to="/menu">
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
