import Grid from "@mui/material/Grid2";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardMedia, CardContent, Box, IconButton } from "@mui/material";

// add button
import ChildProfileSel from "./ChildProfileSel";

import AddIcon from "@mui/icons-material/Add";
import ConstantLib from "../../tools/ConstantLib";

// Profiles
const kidsProf = ConstantLib.getKidsProfile();

// Parent mode

const ProfileViews = () => {
  const location = useLocation();
  const isNewAccount = new URLSearchParams(location.search).get("newAccount");
  const [parentProfile, setParentProfile] = useState({
    name: "Parent",
    imageURL: "https://cdn-icons-png.freepik.com/512/9307/9307950.png",
  });

  useEffect(() => {
    // Load parent profile from localStorage if available
    const storedProfile = localStorage.getItem("parentProfile");
    if (storedProfile) {
      try {
        const profile = JSON.parse(storedProfile);
        setParentProfile(profile);
      } catch (error) {
        console.error("Error parsing parent profile:", error);
      }
    }
  }, []);

  return (
    <Grid container direction={"row"} spacing={2} justifyContent="center">
      {/* Parent Profile - Use saved profile data */}
      <ChildProfileSel
        name={parentProfile.name}
        url={parentProfile.imageURL}
        PAGE_LINK={"/parentlogin/reg"}
      />

      {/* Child Profiles */}
      {kidsProf
        .filter((a) => !isNewAccount || a.type === "parent")
        .map((a, index) => (
          <ChildProfileSel
            key={index}
            name={a.name}
            url={a.imageURL}
            PAGE_LINK={"/childmain/" + a.name}
          />
        ))}

      {/* Add User Profile */}
      <ChildProfileSel
        name={"Add User"}
        url={
          "https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4="
        }
        PAGE_LINK={"/parentlogin/Account"}
      />
    </Grid>
  );

  // Time for the add button
};

export default ProfileViews;
