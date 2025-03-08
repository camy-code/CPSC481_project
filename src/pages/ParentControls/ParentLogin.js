import { useState } from "react";
import { TextField, Button,  Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ColorPick from "../../tools/ColorPick";
import Grid from '@mui/material/Grid2';


import ExitButton from "../../components/menuComponents/ExitButton";

import { useParams } from "react-router-dom";
const ParentLogin = () => {
    const { mode } = useParams();
    const id = decodeURIComponent(mode);

    // The following is for logging in variables
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

      // The folowing is to figure out which page to move to

const pageMover = (answer) => {
  if (answer === "History") {
    return "/history"
  } else if (answer === "Screen time") {
    return "/screentime"
  } else if (answer === "Restrict") {
    return "/restrict"
  } else if (answer === "reg") {
    return "/parentmain"
  } 

  else {
    return "/acount";
  }

}


    return <>
    <Box sx={{margin:3, paddingTop:3}}>
  <ExitButton to1="/menu" label="Go Back"/>
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
        
        <Typography variant="h5" mb={2}>
          Parent sign in
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
     

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, backgroundColor:ColorPick.getSecondary() }} component={Link} to={pageMover(id)}>
            Login
        </Button>

        
      </Box>
    </Grid>
</>
}

export default ParentLogin