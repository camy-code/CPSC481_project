import { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import ColorPick from "../tools/ColorPick";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Create = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    pin: "",
    confirmPin: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!formData.email) {
      setError("Email is required");
      return;
    }
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Validate password
    if (!formData.password) {
      setError("Password is required");
      return;
    }
    if (!validatePassword(formData.password)) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Validate pin
    if (!formData.pin) {
      setError("PIN is required");
      return;
    }
    if (formData.pin.length !== 4) {
      setError("PIN must be exactly 4 digits");
      return;
    }
    if (!/^\d+$/.test(formData.pin)) {
      setError("PIN must contain only numbers");
      return;
    }
    if (formData.pin !== formData.confirmPin) {
      setError("PINs do not match");
      return;
    }

    // If all validations pass, navigate to parent profile init
    navigate("/parentprofileinit?fromCreate=true");
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
          Create Parent Account
        </Typography>

        {error && (
          <Typography
            variant="body2"
            sx={{
              color: ColorPick.getErrorColor(),
              mb: 2,
              fontWeight: "bold",
            }}
          >
            {error}
          </Typography>
        )}

        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          error={error.includes("email")}
        />

        <TextField
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
          error={error.includes("Password")}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          fullWidth
          margin="normal"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={error.includes("Passwords")}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="PIN (4 digits)"
          name="pin"
          type="password"
          fullWidth
          margin="normal"
          value={formData.pin}
          onChange={handleChange}
          inputProps={{ maxLength: 4 }}
          error={error.includes("PIN")}
        />

        <TextField
          label="Confirm PIN"
          name="confirmPin"
          type="password"
          fullWidth
          margin="normal"
          value={formData.confirmPin}
          onChange={handleChange}
          inputProps={{ maxLength: 4 }}
          error={error.includes("PINs")}
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
          }}
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
