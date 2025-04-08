import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ColorPick from '../../tools/ColorPick';

function ReportViewDialog({ open, onClose, name}) {
  const [shows, setShows] = useState([
    'Breaking Bad',
    'Stranger Things',
    'The Office',
    'Game of Thrones',
  ]);

  const handleDelete = (indexToDelete) => {
    setShows((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{name}</DialogTitle>
      <DialogContent>
        {shows.length === 0 ? (
          <Typography>No shows left!</Typography>
        ) : (
          <List>
            {shows.map((show, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton edge="end" onClick={() => handleDelete(index)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={show} />
              </ListItem>
            ))}
          </List>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{textTransform:"None", color:"white", backgroundColor:ColorPick.getSecondary(), "&:hover":{backgroundColor:ColorPick.getSecondaryHOVER}}}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ReportViewDialog;
