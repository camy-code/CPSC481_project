import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// Some react imports
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

const ParentLayout = () => {
  // TODO: make a header

  return (
    <>
      
    <h1>Hello asshole</h1>
      <Outlet />

    
        {/* <Footer /> */}
        {/* I just dont want the footer right now */}
      
    </>
  );
};

// TODO: make header/footer components

export default ParentLayout;
