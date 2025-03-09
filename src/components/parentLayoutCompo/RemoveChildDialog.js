import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle,Checkbox, Button, FormControlLabel, Card, Typography, Grid2 } from '@mui/material';
import ColorPick from '../../tools/ColorPick';
import Box from '@mui/material';
import ConstantLib from '../../tools/ConstantLib';
import Grid from '@mui/material/Grid2';

import { useEffect } from 'react';
const kidsProf = ConstantLib.getKidsProfile();


const RemoveChildDialog = ({ open, onClose }) => { 

    var i;
    const [arr,setArr] = useState(Array(kidsProf.length).fill(false))
    

    const toggle = (index) => {
        // Use the functional form of setArr to update the state correctly
        setArr((prevArr) => {
            const newArr = [...prevArr];  // Make a copy of the previous array
            newArr[index] = !newArr[index]; // Toggle the value at the given index
            return newArr; // Return the updated array
        });
    };
    

   
    
     const [name, setName] = useState('');
        
    const handleSubmit = () => {
        alert("Child removed")
        onClose();
        
      };

    
 

      return <Dialog open={open} onClose={onClose}>
            <DialogTitle>Remove Child</DialogTitle>
            <DialogContent>
              <Card sx={{ padding: 2 }}>
                
               {kidsProf.map((a, index)=>(
                 <Grid container direction={"row"} spacing={2} alignItems={"center"} justifyContent={"space-between"}>
                    <Grid container direction={"column"}>
                    <Typography variant='h4'>{a.name}</Typography>
                    {/* Check mark or X button*/}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
  <input type="checkbox" style={{ transform: "scale(2)" }} id="1" />
  <label htmlFor="1" style={{ fontSize: '25px', marginLeft: '8px' }}>Remove</label>
</div>
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
export default RemoveChildDialog;