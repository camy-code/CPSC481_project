import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle,Checkbox, Button, FormControlLabel, Card, Typography, Grid2, TextField } from '@mui/material';
import ColorPick from '../../tools/ColorPick';
import Box from '@mui/material';
import ConstantLib from '../../tools/ConstantLib';
import Grid from '@mui/material/Grid2';
import { useEffect } from 'react';

// !! Hello, this is some messy code! 
    // All it does is the dialog (pop up) when someone wants to edit their kids.


const kidsProf = ConstantLib.getKidsProfile();
const EditChildDialog = ({ open, onClose }) => { 


     const [name, setName] = useState('');
        
    const handleSubmit = () => {
        alert("Child removed")
        onClose();
        
      };

              // Handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
     // Does nothing
    }
  };

    
 

      return <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Child</DialogTitle>
            <DialogContent>
              <Card sx={{ padding: 2 }}>
                
               {kidsProf.map((a, index)=>(
                 <Grid container direction={"row"} spacing={2} alignItems={"center"} justifyContent={"space-between"}>
                    <Grid container direction={"column"}>
                    
                    <TextField defaultValue={a.name}/>
                    {/* Check mark or X button*/}
                 <input
                         type="file"
                         accept="image/*"
                         style={{ display: 'none' }}
                         id="file-upload"
                         onChange={handleFileSelect}
                       />
                       <Button sx={{backgroundColor:ColorPick.getSecondary(), padding:1, color:"black", display:"flex"}} component="label" htmlFor="file-upload">
                         Change image
                       </Button>
                    </Grid>
                 
                 <img src={a.imageURL} alt="Selected" style={{ width: '150px', height:'150px', marginTop: 10 }} />
                 </Grid>
               ))}

  

              </Card>
            </DialogContent>
            <DialogActions sx={{ display: 'flex', justifyContent: 'center', width: '90%' }}>
            <Button onClick={handleSubmit} sx={{padding:1, backgroundColor:ColorPick.getSecondary(), color:"black"}}>
                Confirm
              </Button>
             
              <Button onClick={onClose} sx={{padding:1, backgroundColor:ColorPick.getThird(), color:"black"}}>Cancel</Button>
             
            </DialogActions>
          </Dialog>

}
export default EditChildDialog;