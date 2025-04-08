import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import ColorPick from "../tools/ColorPick";
import Grid from "@mui/material/Grid2";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("None");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "") {
      setError("Please enter your email");
      return;
    }
    if (formData.password === "") {
      setError("Please enter your password");
      return;
    }
    if (
      formData.password !== "password" ||
      formData.email !== "test@email.com"
    ) {
      setError("Invalid email or password. Please try again.");
      return;
    }
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
        {error !== "None" && (
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
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          error={error !== "None" && formData.email === ""}
          helperText={
            error !== "None" && formData.email === "" ? "Email is required" : ""
          }
        />

        <TextField
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
          error={error !== "None" && formData.password === ""}
          helperText={
            error !== "None" && formData.password === ""
              ? "Password is required"
              : ""
          }
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
          onClick={handleSubmit}
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
