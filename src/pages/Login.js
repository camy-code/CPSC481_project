import { useState } from "react";
import { TextField, Button,  Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ColorPick from "../tools/ColorPick";
import Grid from '@mui/material/Grid2';

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
          Login
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
     

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, backgroundColor:ColorPick.getSecondary() }} component={Link} to="/menu">
          Create Account
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account? <Link to="/create">Create account</Link>
        </Typography>
      </Box>
    </Grid>
  );
};

export default Login;
