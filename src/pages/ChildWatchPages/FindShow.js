import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import { Search, ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ColorPick from "../../tools/ColorPick";

const FindShow = () => {
  const navigate = useNavigate();
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
          onClick={() => navigate(-1)}
          variant="contained"
          sx={{
            bgcolor: ColorPick.getSecondary(),
            color: "black",
            textTransform: "none",
            borderRadius: 2,
            px: 2,
            py: 1,
            boxShadow: 2,
          }}
        >
          ← Go Back
        </Button>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "black" }}>
          Find a Show
        </Typography>
        <Avatar sx={{ bgcolor: ColorPick.getSecondary(), color: "black" }}>
          U
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
        }}
      >
        <Search sx={{ color: "black", ml: 2 }} />
        <TextField
          fullWidth
          placeholder="Search for a show..."
          variant="standard"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            ml: 2,
            bgcolor: "white",
            borderRadius: 2,
            px: 2,
            input: { color: "black" },
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
            variant="contained"
            onClick={() => {
              setSelectedCategory(category);
              setSearchQuery("");
            }}
            sx={{
              bgcolor: ColorPick.getSecondary(),
              color: "white",
              px: 3,
              py: 1,
              borderRadius: 3,
              boxShadow: 2,
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
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {(searchResults.length > 0
              ? searchResults
              : shows[selectedCategory] || []
            ).map((show, index) => (
              <Button
                key={index}
                sx={{
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
                }}
                onClick={() =>
                  navigate("/showdetails", {
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
