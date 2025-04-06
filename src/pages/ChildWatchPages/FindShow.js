import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import { Search, ArrowBack, ChevronLeft } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ColorPick from "../../tools/ColorPick";
import ConstantLib from "../../tools/ConstantLib";

const FindShow = () => {
  const navigate = useNavigate();
  const { profileName } = useParams();
  const searchInputRef = useRef(null);
  const kidsProfiles = ConstantLib.getKidsProfile();
  let currentProfile = profileName
    ? kidsProfiles.find(
        (profile) => profile.name.toLowerCase() === profileName.toLowerCase()
      )
    : { name: "U", imageURL: "" };

  // If no profile was found, use default
  if (!currentProfile) {
    currentProfile = { name: "U", imageURL: "" };
  }

  const categories = [
    "Action",
    "Comedy",
    "Adventure",
    "Fantasy",
    "Sci-Fi",
    "Cartoons",
    "Drama",
    "Mystery",
    "Horror",
    "Family",
  ];
  const shows = {
    Action: [
      { title: "Batman", image: "/images/batman.jpg" },
      { title: "Avatar", image: "/images/avatar.jpg" },
      { title: "SpongeBob", image: "/images/spongebob.jpg" },
    ],
    Comedy: [
      { title: "SpongeBob", image: "/images/spongebob.jpg" },
      { title: "Batman", image: "/images/batman.jpg" },
      { title: "Avatar", image: "/images/avatar.jpg" },
    ],
    Adventure: [
      { title: "Avatar", image: "/images/avatar.jpg" },
      { title: "Batman", image: "/images/batman.jpg" },
      { title: "SpongeBob", image: "/images/spongebob.jpg" },
    ],
    Fantasy: [
      { title: "Batman", image: "/images/batman.jpg" },
      { title: "Avatar", image: "/images/avatar.jpg" },
      { title: "SpongeBob", image: "/images/spongebob.jpg" },
    ],
    "Sci-Fi": [
      { title: "Avatar", image: "/images/avatar.jpg" },
      { title: "Batman", image: "/images/batman.jpg" },
      { title: "SpongeBob", image: "/images/spongebob.jpg" },
    ],
    Cartoons: [
      { title: "SpongeBob", image: "/images/spongebob.jpg" },
      { title: "Batman", image: "/images/batman.jpg" },
      { title: "Avatar", image: "/images/avatar.jpg" },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const searchResults = searchQuery
    ? [{ title: "SpongeBob", image: "/images/spongebob.jpg" }]
    : [];

  const [currentFocus, setCurrentFocus] = useState("search"); // Initial focus on search bar

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && document.activeElement.tagName !== "INPUT") {
      e.preventDefault();
      navigate(-1);
      return;
    }

    // Allow typing in search bar when focused
    if (document.activeElement.tagName === "INPUT") {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        searchInputRef.current?.blur();
        setCurrentFocus("category-0");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        searchInputRef.current?.blur();
        setCurrentFocus("back");
      }
      return;
    }

    // Get the current shows array based on search or category
    const currentShows =
      searchResults.length > 0
        ? searchResults
        : selectedCategory
        ? shows[selectedCategory] || []
        : [];

    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        if (currentFocus === "back") {
          setCurrentFocus("logo");
        } else if (currentFocus === "logo") {
          setCurrentFocus("search");
          searchInputRef.current?.focus();
        } else if (currentFocus.startsWith("category-")) {
          const index = parseInt(currentFocus.split("-")[1]);
          if (index < categories.length - 1) {
            setCurrentFocus(`category-${index + 1}`);
          }
        } else if (currentFocus.startsWith("show-")) {
          const index = parseInt(currentFocus.split("-")[1]);
          if (index < currentShows.length - 1) {
            setCurrentFocus(`show-${index + 1}`);
          }
        }
        break;

      case "ArrowLeft":
        e.preventDefault();
        if (currentFocus === "logo") {
          setCurrentFocus("back");
        } else if (currentFocus === "search") {
          searchInputRef.current?.blur();
          setCurrentFocus("logo");
        } else if (currentFocus.startsWith("category-")) {
          const index = parseInt(currentFocus.split("-")[1]);
          if (index > 0) {
            setCurrentFocus(`category-${index - 1}`);
          }
        } else if (currentFocus.startsWith("show-")) {
          const index = parseInt(currentFocus.split("-")[1]);
          if (index > 0) {
            setCurrentFocus(`show-${index - 1}`);
          }
        }
        break;

      case "ArrowDown":
        e.preventDefault();
        if (currentFocus === "back" || currentFocus === "logo") {
          setCurrentFocus("search");
          searchInputRef.current?.focus();
        } else if (currentFocus === "search") {
          searchInputRef.current?.blur();
          setCurrentFocus("category-0");
        } else if (currentFocus.startsWith("category-")) {
          if (currentShows.length > 0) {
            setCurrentFocus("show-0");
          }
        }
        break;

      case "ArrowUp":
        e.preventDefault();
        if (currentFocus === "search") {
          searchInputRef.current?.blur();
          setCurrentFocus("back");
        } else if (currentFocus.startsWith("show-")) {
          const categoryIndex = categories.indexOf(selectedCategory);
          if (categoryIndex !== -1) {
            setCurrentFocus(`category-${categoryIndex}`);
          } else {
            setCurrentFocus("search");
            searchInputRef.current?.focus();
          }
        } else if (currentFocus.startsWith("category-")) {
          setCurrentFocus("search");
          searchInputRef.current?.focus();
        }
        break;

      case "Enter":
      case " ":
        e.preventDefault();
        if (currentFocus === "search") {
          searchInputRef.current?.focus();
        } else {
          document.querySelector(`[data-focus="${currentFocus}"]`)?.click();
        }
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentFocus, searchQuery, selectedCategory]);

  const getFocusStyle = (elementId) => ({
    outline:
      currentFocus === elementId && elementId !== "search"
        ? "3px solid #FFD700"
        : "none",
    boxShadow:
      currentFocus === elementId && elementId !== "search"
        ? "0 0 10px #FFD700, 0 0 20px rgba(255, 215, 0, 0.5)"
        : "none",
    transform:
      currentFocus === elementId && elementId !== "search"
        ? "scale(1.05)"
        : "none",
    transition: "all 0.2s ease",
    position: "relative",
    zIndex: currentFocus === elementId ? 1 : "auto",
  });

  return (
    <Box
      sx={{
        padding: 3,
        bgcolor: ColorPick.getPrimary(),
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* Header with Go Back, Title, and User Profile */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Button
          data-focus="back"
          onClick={() => navigate(-1)}
          variant="contained"
          sx={{
            ...getFocusStyle("back"),
            bgcolor: ColorPick.getSecondary(),
            color: "white",
            textTransform: "none",
            borderRadius: 2,
            px: 2,
            py: 1,
            boxShadow: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
            "&:hover": {
              backgroundColor: ColorPick.getSecondary(),
              opacity: 0.9,
            },
          }}
        >
          <ChevronLeft /> Go Back
        </Button>
        <Button
          data-focus="logo"
          onClick={() => navigate("/menu")}
          sx={{
            ...getFocusStyle("logo"),
            color: "black",
            fontWeight: "bold",
            fontSize: "1.5rem",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "transparent",
              opacity: 0.8,
            },
          }}
        >
          KiddoFlix
        </Button>
        <Avatar
          src={currentProfile.imageURL}
          sx={{
            bgcolor: ColorPick.getSecondary(),
            color: "white",
            width: 40,
            height: 40,
          }}
        >
          {currentProfile.name ? currentProfile.name[0] : "U"}
        </Avatar>
      </Box>

      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "white",
          p: 1,
          borderRadius: 3,
          mb: 3,
          position: "relative",
          zIndex: currentFocus === "search" ? 2 : 1,
        }}
      >
        <Search
          sx={{
            color: "black",
            ml: 2,
            position: "relative",
            zIndex: 3,
          }}
        />
        <TextField
          inputRef={searchInputRef}
          data-focus="search"
          fullWidth
          placeholder="Search for a show..."
          variant="standard"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setCurrentFocus("search")}
          sx={{
            ml: 2,
            bgcolor: "white",
            borderRadius: 2,
            px: 2,
            input: { color: "black" },
            "& .MuiInput-root": {
              position: "relative",
              zIndex: 2,
            },
          }}
        />
      </Box>

      {/* Recommended Categories */}
      <Typography
        variant="h6"
        sx={{ mb: 2, fontWeight: "bold", color: "black" }}
      >
        Recommended Categories
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}>
        {categories.map((category, index) => (
          <Button
            key={index}
            data-focus={`category-${index}`}
            variant="contained"
            onClick={() => {
              setSelectedCategory(category);
              setSearchQuery("");
            }}
            sx={{
              ...getFocusStyle(`category-${index}`),
              bgcolor: ColorPick.getSecondary(),
              color: "white",
              px: 3,
              py: 1,
              borderRadius: 3,
              boxShadow: 2,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Display Shows Based on Selected Category */}
      {(selectedCategory || searchResults.length > 0) && (
        <>
          <Typography
            variant="h6"
            sx={{ mb: 2, fontWeight: "bold", color: "black" }}
          >
            {searchQuery
              ? "Search Results"
              : selectedCategory
              ? selectedCategory + " Shows"
              : ""}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              transition: "all 0.3s ease",
            }}
          >
            {(searchResults.length > 0
              ? searchResults
              : shows[selectedCategory] || []
            ).map((show, index) => (
              <Button
                key={index}
                data-focus={`show-${index}`}
                sx={{
                  ...getFocusStyle(`show-${index}`),
                  backgroundImage: `url(${show.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "20vw",
                  maxWidth: "300px",
                  height: "15vw",
                  maxHeight: "225px",
                  marginRight: 2,
                  borderRadius: 3,
                  boxShadow: 2,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  },
                }}
                onClick={() =>
                  navigate(`/showdetails/${profileName}`, {
                    state: { title: show.title, image: show.image },
                  })
                }
              ></Button>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default FindShow;
