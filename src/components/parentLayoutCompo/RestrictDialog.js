import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Card, Typography } from '@mui/material';
import ColorPick from '../../tools/ColorPick';


const RestrictDialog = ({ open, onClose }) => {
    return <>
    <Dialog open={open} onClose={onClose}>
        <DialogContent>
            <Typography>Are you sure you want to restrict this show?</Typography>
        </DialogContent>

        <DialogActions sx={{ display: 'flex', justifyContent: 'center', width: '95%' }}>
            <Button onClick={onClose} sx={{ padding: 1, backgroundColor:ColorPick.getSecondary(), color: "black" }}>
                Yes</Button>
            <Button onClick={onClose} sx={{ padding: 1, backgroundColor: ColorPick.getThird(), color: "black" }}>
                No
            </Button>
        </DialogActions>
    </Dialog>
    </>
}

export default RestrictDialog;