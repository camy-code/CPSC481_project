import { useState } from "react";
import { TextField, Button,  Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ColorPick from "../../tools/ColorPick";
import Grid from '@mui/material/Grid2';

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
// Time for the moving
const navigate = useNavigate();

      // This is the function that will be used to move to the next page
      const handleMove = (page) => {
        const isNumeric = (string) => /^[+-]?\d+(\.\d+)?$/.test(string)

    
        let pin = formData.pin;
        if (pin === "") {
          setError("Please enter a pin");
          return;
        }
        else if (pin.length < 4) {
          setError("Please enter a 4 digit pin");
          return;
        }
        else if (isNumeric(pin) === false) {
          setError("Please enter all numbers");
          
        }  else if (pin !== "1234") {
          setError("Incorrect pin");
          return;
        } else {
          setError("None");
          navigate(page);
        }

      
      };


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
        
        <Typography variant="h5" mb={2} >
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
          InputLabelProps={{required: false}}
          sx={{
            '& .MuiInputBase-input': {
      fontSize: '2.2rem',
      textAlign: 'center', // This centers the text within the input field
      justifyContent: 'center',
      display: 'flex',
      
    },
    '& .MuiInputLabel-root': {
      fontSize: '2.2rem',
      textAlign: 'center', // This centers the label text
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft:"100px", 
      '&.Mui-focused': {
        paddingLeft:"0px",
        fontSize: '1.7rem',
      },
      '&.MuiFormLabel-filled': {
        paddingLeft:"0px",
        fontSize: '1.7rem',
      },
      
    },
    
    
          }}
        />
        
        
     

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, backgroundColor:ColorPick.getSecondary() }} onClick={() => handleMove(pageMover(id))}>
            Login
        </Button>

        <Typography variant="body1" mt={2} sx={{color: (error === "None") ? "white":ColorPick.getErrorColor(), fontSize:"1.25rem"}}>
      {error}
      </Typography>  
      </Box>
      
    </Grid>
</>
}

export default ParentLogin

// Gotta work on some of the work stuff