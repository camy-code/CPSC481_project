import Grid from "@mui/material/Grid2";
import { Box, Button, Typography } from "@mui/material";
import ColorPick from "../../tools/ColorPick";

import ChangePasswordDialog from "../../components/parentLayoutCompo/ChangePasswordDialog";
import DeleteAccountDialog from "../../components/parentLayoutCompo/DeleteAccountDialog";
import AddChildDialog from "../../components/parentLayoutCompo/AddChildDialog";
import RemoveChildDialog from "../../components/parentLayoutCompo/RemoveChildDialog";
import EditChildDialog from "../../components/parentLayoutCompo/EditChildDialog";

import { useState } from "react";

const genButton = (label,func1, col) => {
    return <Button sx={{backgroundColor:col, padding:1, color:"black", width:350}} onClick={func1}>
        <Typography sx={{fontSize:30}}>{label}</Typography>
    </Button>
}

const Account = () => {

    // TODO: add some more later
    const [openDialogCHANGE, setOpenDialogCHANGE] = useState(false); 
    const handleClickOpen = () => {
        setOpenDialogCHANGE(true);
      };
    
      const handleClose = () => {
        setOpenDialogCHANGE(false);
      };

      // For delete
      const [openDialogDELETE, setOpenDialogDELETE] = useState(false); 
      const handleClickOpeDELETE = () => {
          setOpenDialogDELETE(true);
        };
      
        const handleCloseDELETE = () => {
          setOpenDialogDELETE(false);
        };

    // The following is for add
    const [openDialogADD, setOpenDialogADD] = useState(false); 
    const handleClickOpenADD = () => {
        setOpenDialogADD(true);
      };
    
      const handleCloseADD = () => {
        setOpenDialogADD(false);
      };

        // The following is for REMOVE
    const [openDialogREMOVE, setOpenDialogREMOVE] = useState(false); 
    const handleClickOpenREMOVE = () => {
        setOpenDialogREMOVE(true);
      };
    
      const handleCloseREMOVE = () => {
        setOpenDialogREMOVE(false);
      };

           // The following is for REMOVE
    const [openDialogEDIT, setOpenDialogEDIT] = useState(false); 
    const handleClickOpenEDIT = () => {
        setOpenDialogEDIT(true);
      };
    
      const handleCloseEDIT = () => {
        setOpenDialogEDIT(false);
      };



  return (
    <>
    <Box >
    <Grid container justifyContent="center" sx={{ width: "100%" }}>
  <Grid container direction={"column"} alignItems={"flex-start"} marginTop={4} spacing={2}>
    <Typography variant="h4">Password</Typography>
    <div>
    {genButton("Change password", (handleClickOpen), ColorPick.getSecondary())}
    <ChangePasswordDialog open={openDialogCHANGE} onClose={handleClose} />
    </div>
  </Grid>
</Grid>


        <Grid container justifyContent="center" sx={{ width: "100%" }}>
  <Grid container direction={"column"} alignItems={"flex-start"} marginTop={4} spacing={2}>
    <Typography variant="h4">Edit Children</Typography>

    <div>
    {genButton("Add child", (handleClickOpenADD), ColorPick.getSecondary())}
    <AddChildDialog open={openDialogADD} onClose={handleCloseADD}/>
    </div>
    <div>
    {genButton("Remove child", (handleClickOpenREMOVE), ColorPick.getSecondary())}
    <RemoveChildDialog open={openDialogREMOVE} onClose={handleCloseREMOVE}/>
    </div>
    <div>
    {genButton("Edit Child", (handleClickOpenEDIT), ColorPick.getSecondary())}
    <EditChildDialog open={openDialogEDIT} onClose={handleCloseEDIT}/>
    </div>
  </Grid>
</Grid>

<Grid container justifyContent="center" sx={{ width: "100%" }}>
  <Grid container direction={"column"} alignItems={"flex-start"} marginTop={4} spacing={2}>
    <Typography variant="h4">Account</Typography>

    <div>
    {genButton("DELETE", (handleClickOpeDELETE), ColorPick.getThird())}
    <DeleteAccountDialog open={openDialogDELETE} onClose={handleCloseDELETE}/>
    </div>
  </Grid>
</Grid>


      

      </Box>
    </>
  );
};

export default Account;
