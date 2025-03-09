import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Card, Typography } from '@mui/material';
import ColorPick from '../../tools/ColorPick';
import Box from '@mui/material';
import { useNavigate } from 'react-router-dom';


const DeleteAccountDialog = ({ open, onClose }) => {

    const navigate = useNavigate();
const handleSubmit = () => {
    alert("Account deleted")
    onClose();
    navigate("/") // Going back to the main page 
    // to show that we are deleted an account
}

return <>

<Dialog open={open} onClose={onClose}>
        <DialogContent>
            <Typography>Are you sure you want to delete your account?</Typography>
        </DialogContent>

<DialogActions sx={{ display: 'flex', justifyContent: 'center', width: '95%' }}>
    
        <Button onClick={handleSubmit} sx={{padding:1, backgroundColor:ColorPick.getSecondary(), color:"black"}}>Yes</Button>
        <Button onClick={onClose} sx={{padding:1, backgroundColor:ColorPick.getThird(), color:"black"}}>
          No
        </Button>
        
      </DialogActions>
      </Dialog>
</>
}

export default DeleteAccountDialog