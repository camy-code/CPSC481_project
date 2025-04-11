import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import {
  Search,
  SportsEsports,
  EmojiEvents,
  School,
  MusicNote,
  Pets,
  Castle,
  Security,
} from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ColorPick from "../../tools/ColorPick";
import ConstantLib from "../../tools/ConstantLib";
import Grid2 from "@mui/material/Grid2";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { isShowRestricted } from "../../tools/StorageUtils";

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
    { name: "Popular Picks", icon: <EmojiEvents /> },
    { name: "Animals", icon: <Pets /> },
    { name: "Fantasy", icon: <Castle /> },
    { name: "Adventure", icon: <SportsEsports /> },
    { name: "Music", icon: <MusicNote /> },
    { name: "School Life", icon: <School /> },
    { name: "Superheroes", icon: <Security /> },
  ];

  const shows = {
    Adventure: [
      { title: "Dora", image: "/images/Dora.jpg" },
      { title: "Handy Manny", image: "/images/HandyManny.jpg" },
      { title: "Max & Ruby", image: "/images/max_and_ruby.jpg" },
      { title: "SpongeBob", image: "/images/spongebob.jpeg" },
      { title: "Phineas and Ferb", image: "/images/phineas_and_ferb.png" },
      { title: "Johnny Test", image: "/images/JohnnyTest.webp" },
      { title: "Super Why", image: "/images/super_why.jpg" },
      { title: "Backyardigans", image: "/images/backyardigans.jpg" },
      { title: "Fairly OddParents", image: "/images/Fairly_OddParents.webp" },
      { title: "Danny Phantom", image: "/images/DannyPhantom.jpg" },
      { title: "Avatar", image: "/images/avatar.jpg" },
      { title: "Kim Possible", image: "/images/kim_possible.jpg" },
    ],
    Animals: [
      { title: "Franklin", image: "/images/franklin.png" },
      { title: "Wonder Pets", image: "/images/wonder_pets.jpg" },
      { title: "Backyardigans", image: "/images/backyardigans.jpg" },
      { title: "Peppa Pig", image: "/images/peppa.jpg" },
    ],
    Fantasy: [
      { title: "Avatar", image: "/images/avatar.jpg" },
      { title: "Fairly OddParents", image: "/images/Fairly_OddParents.webp" },
      { title: "Danny Phantom", image: "/images/DannyPhantom.jpg" },
      {
        title: "Harry and His Bucket Full of Dinosaurs",
        image: "/images/harry.webp",
      },
      { title: "Naruto", image: "/images/naruto.jpg" },
      { title: "Kim Possible", image: "/images/kim_possible.jpg" },
    ],
    Music: [
      { title: "Hannah Montana", image: "/images/hannah-montana.jpg" },
      { title: "Drake & Josh", image: "/images/drake_Josh.jpg" },
      { title: "iCarly", image: "/images/iCarly.jpg" },
      {
        title: "The Suite Life of Zack & Cody",
        image: "/images/zach_Cody.webp",
      },
    ],
    "Popular Picks": [
      { title: "Avatar", image: "/images/avatar.jpg" },
      { title: "Backyardigans", image: "/images/backyardigans.jpg" },
      { title: "Batman", image: "/images/batman.jpg" },
      { title: "Cory in the House", image: "/images/cory.jpg" },
      { title: "Danny Phantom", image: "/images/DannyPhantom.jpg" },
      { title: "Dora", image: "/images/Dora.jpg" },
      { title: "Drake & Josh", image: "/images/drake_Josh.jpg" },
      { title: "Fairly OddParents", image: "/images/Fairly_OddParents.webp" },
      { title: "Franklin", image: "/images/franklin.png" },
      { title: "Handy Manny", image: "/images/HandyManny.jpg" },
      { title: "Hannah Montana", image: "/images/hannah-montana.jpg" },
      {
        title: "Harry and His Bucket Full of Dinosaurs",
        image: "/images/harry.webp",
      },
      { title: "iCarly", image: "/images/iCarly.jpg" },
      { title: "Johnny Test", image: "/images/JohnnyTest.webp" },
      { title: "Kim Possible", image: "/images/kim_possible.jpg" },
      { title: "Max & Ruby", image: "/images/max_and_ruby.jpg" },
      { title: "Naruto", image: "/images/naruto.jpg" },
      { title: "Peppa Pig", image: "/images/peppa.jpg" },
      { title: "Phineas and Ferb", image: "/images/phineas_and_ferb.png" },
      { title: "SpongeBob", image: "/images/spongebob.jpeg" },
      { title: "Super Why", image: "/images/super_why.jpg" },
      {
        title: "The Suite Life of Zack & Cody",
        image: "/images/zach_Cody.webp",
      },
      { title: "Wonder Pets", image: "/images/wonder_pets.jpg" },
    ],
    "School Life": [
      { title: "Drake & Josh", image: "/images/drake_Josh.jpg" },
      { title: "iCarly", image: "/images/iCarly.jpg" },
      {
        title: "The Suite Life of Zack & Cody",
        image: "/images/zach_Cody.webp",
      },
      { title: "Cory in the House", image: "/images/cory.jpg" },
      { title: "Hannah Montana", image: "/images/hannah-montana.jpg" },
      { title: "Fairly OddParents", image: "/images/Fairly_OddParents.webp" },
      { title: "Kim Possible", image: "/images/kim_possible.jpg" },
      { title: "Danny Phantom", image: "/images/DannyPhantom.jpg" },
    ],
    Superheroes: [
      { title: "Danny Phantom", image: "/images/DannyPhantom.jpg" },
      { title: "Kim Possible", image: "/images/kim_possible.jpg" },
      { title: "Batman", image: "/images/batman.jpg" },
      { title: "Naruto", image: "/images/naruto.jpg" },
      { title: "Avatar", image: "/images/avatar.jpg" },
      { title: "Fairly OddParents", image: "/images/Fairly_OddParents.webp" },
    ],
  };

  // List of all shows for search functionality
  const allShows = [
    { title: "Franklin", image: "/images/franklin.png" },
    { title: "Wonder Pets", image: "/images/wonder_pets.jpg" },
    { title: "Backyardigans", image: "/images/backyardigans.jpg" },
    { title: "Avatar", image: "/images/avatar.jpg" },
    { title: "Fairly OddParents", image: "/images/Fairly_OddParents.webp" },
    { title: "Dora", image: "/images/Dora.jpg" },
    { title: "Handy Manny", image: "/images/HandyManny.jpg" },
    { title: "Max & Ruby", image: "/images/max_and_ruby.jpg" },
    { title: "SpongeBob", image: "/images/spongebob.jpeg" },
    { title: "Phineas and Ferb", image: "/images/phineas_and_ferb.png" },
    { title: "Johnny Test", image: "/images/JohnnyTest.webp" },
    { title: "Hannah Montana", image: "/images/hannah-montana.jpg" },
    { title: "Drake & Josh", image: "/images/drake_Josh.jpg" },
    { title: "iCarly", image: "/images/iCarly.jpg" },
    { title: "The Suite Life of Zack & Cody", image: "/images/zach_Cody.webp" },
    { title: "Cory in the House", image: "/images/cory.jpg" },
    { title: "Danny Phantom", image: "/images/DannyPhantom.jpg" },
    { title: "Kim Possible", image: "/images/kim_possible.jpg" },
    { title: "Batman", image: "/images/batman.jpg" },
    { title: "Super Why", image: "/images/super_why.jpg" },
    {
      title: "Harry and His Bucket Full of Dinosaurs",
      image: "/images/harry.webp",
    },
    { title: "Naruto", image: "/images/naruto.jpg" },
    { title: "Peppa Pig", image: "/images/peppa.jpg" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const filteredResults = allShows.filter(
      (show) =>
        show.title.toLowerCase().includes(query.toLowerCase()) &&
        !isShowRestricted(profileName, show.title)
    );
    setSearchResults(filteredResults);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
    setSelectedCategory(null);
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setSearchQuery("");
    setSearchResults([]);
    setSuggestions([]);
  };

  const [currentFocus, setCurrentFocus] = useState("search"); // Initial focus on search bar

  useEffect(() => {
    // Reset scroll position to top when component mounts
    window.scrollTo(0, 0);
  }, []);

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
      {/* Header with Go Back Button and Title */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Button
          onClick={() => navigate(-1)}
          sx={{
            backgroundColor: ColorPick.getSecondary(),
            padding: 1,
            paddingRight: 2,
            textTransform: "none",
            "&:hover": {
              backgroundColor: ColorPick.getSecondaryHOVER(),
              transform: "scale(1.1)",
              transition: "transform 0.2s ease-in-out",
            },
            border: "3px solid black",
          }}
        >
          <Grid2
            container
            direction={"row"}
            spacing={1}
            alignItems="center"
            sx={{ color: "white" }}
          >
            <ArrowBackOutlinedIcon />
            <Typography>Back</Typography>
          </Grid2>
        </Button>
        <Button
          onClick={() => navigate("/menu")}
          sx={{
            color: "black",
            fontWeight: "bold",
            fontSize: "1.5rem",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "transparent",
              opacity: 0.8,
              transform: "scale(1.15)",
              transition: "transform 0.2s ease-in-out",
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
            "&:hover": {
              transform: "scale(1.1)",
              transition: "transform 0.2s ease-in-out",
            },
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
          onChange={handleSearchChange}
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

      {suggestions.length > 0 && (
        <Box
          sx={{
            backgroundColor: "white",
            padding: "8px 16px",
            borderRadius: "8px",
            marginBottom: 2,
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1,
              fontWeight: "bold",
            }}
          >
            Did you mean:
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                onClick={() => {
                  setSearchQuery(suggestion.title);
                  handleSearch(suggestion.title);
                }}
                sx={{
                  color: "white",
                  backgroundColor: ColorPick.getSecondary(),
                  textTransform: "none",
                  padding: "4px 12px",
                  borderRadius: "16px",
                  marginLeft: 1,
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: ColorPick.getSecondaryHOVER(),
                    transform: "scale(1.05)",
                  },
                }}
              >
                {suggestion.title}
              </Button>
            ))}
          </Typography>
        </Box>
      )}

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
            onClick={() => handleCategoryClick(category.name)}
            sx={{
              ...getFocusStyle(`category-${index}`),
              bgcolor: ColorPick.getSecondary(),
              color: "white",
              px: 3,
              py: 1,
              borderRadius: 3,
              boxShadow: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.15)",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            {category.icon}
            {category.name}
          </Button>
        ))}
      </Box>

      {/* Display Shows Based on Selected Category or Search */}
      {(selectedCategory || searchQuery) && (
        <>
          <Typography
            variant="h6"
            sx={{ mb: 2, fontWeight: "bold", color: "black" }}
          >
            {searchQuery
              ? `Search Results for "${searchQuery}"`
              : `${selectedCategory} Shows`}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "center",
              transition: "all 0.3s ease",
              padding: 2,
            }}
          >
            {(searchQuery ? searchResults : shows[selectedCategory] || []).map(
              (show, index) => (
                <Button
                  key={index}
                  data-focus={`show-${index}`}
                  sx={{
                    ...getFocusStyle(`show-${index}`),
                    backgroundImage: `url(${show.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "300px",
                    height: "180px",
                    borderRadius: 3,
                    boxShadow: 2,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.15)",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                  onClick={() =>
                    navigate(`/showdetails/${profileName}`, {
                      state: { title: show.title, image: show.image },
                    })
                  }
                />
              )
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default FindShow;
