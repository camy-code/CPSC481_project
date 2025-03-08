import React from "react";

import Sidebar from "./parentLayoutCompo/Sidebar";

import Grid from "@mui/material/Grid2";

// Some react imports
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const ParentLayout = () => {
  // TODO: make a header

  return (
    <>
     <Grid container direction="row" >
      {/* Sidebar (Fixed width) */}
      {/* <Grid item xs={2} sx={{ backgroundColor: "red" }}>
        <Sidebar />
      </Grid> */}

      {/* Main content (Centered Outlet) */}
      <Box sx={{width:"20%"}}><Sidebar/></Box>
        <Box sx={{width:"80%"}}><Outlet /></Box>
     
    </Grid>    
    
    </>
  );
};

// TODO: make header/footer components

export default ParentLayout;
