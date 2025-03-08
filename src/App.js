import "./App.css";
import Layout from "./components/Layout";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
// The following is how we define our pages so App.js has less clutter
import HelperPages from "./tools/HelperPages";

import ColorPick from "./tools/ColorPick";
import NoPage from "./pages/NoPage"; // No page is included only here because it will not be anywhere else

import ParentLayout from "./components/ParentLayout";

function App() {
  // Make a list of all the public pages

    // We add this dive here so our footer has a fair amount of rooms
  return (
    <div style={{ minHeight: "70vh",  backgroundColor:ColorPick.getWhite()}}>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
        {
          // The following just does a bunch of mapping to make things stupid proof
          HelperPages.getPublicPages().map((page) => (
            <Route
              path={page.path}
              element={page.compo} 
            />
          ))
        }
        {/* We need to add pages that need the parent layout */}
       
        {/* The folowing is the map for the admin pages */}
        <Route path="" element={<ParentLayout/>}>
        {HelperPages.getAuthPages().map(  
          (page) => (
            <Route path={page.path}
            element={page.compo } />
          )
         )}
         </Route>

        <Route path ="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
// TODO, make this a list so it is cleaner to deal with

// Make pub pages used in header to be the same so we have one spot to change
