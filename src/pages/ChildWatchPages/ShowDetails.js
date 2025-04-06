import { Box, Typography, Button, Avatar, IconButton } from "@mui/material";
import { ArrowBack, Star, StarBorder, ChevronLeft } from "@mui/icons-material";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ColorPick from "../../tools/ColorPick";
import ConstantLib from "../../tools/ConstantLib";

const SELECTED_EPISODE_COLOR = "#6A5ACD";

const ShowDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { profileName } = useParams();
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

  const { title, image } = location.state || {
    title: "Unknown Show",
    image: "",
  };

  const episodes = Array.from({ length: 10 }, (_, i) => `Episode ${i + 1}`);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentFocus, setCurrentFocus] = useState("back"); // Initial focus on back button

  // Function to handle navigation to VideoPlay
  const handleEpisodeClick = (episode) => {
    setSelectedEpisode(episode);
    navigate(`/videoplay/${profileName}`, {
      state: {
        episode,
        title,
        image,
      },
    });
  };

  const handleFavoriteClick = () => {
    console.log("Favorite button clicked. Current state:", isFavorite);
    setIsFavorite(!isFavorite);
    console.log("New state:", !isFavorite);
    // Here you would typically also update this in your backend/storage
  };

  const handleKeyDown = (e) => {
    // Allow interaction with the favorite button
    if ((e.key === "Enter" || e.key === " ") && currentFocus === "favorite") {
      handleFavoriteClick();
      e.preventDefault(); // Prevent default to keep focus
      setCurrentFocus("favorite"); // Ensure focus remains on favorite
      return;
    }

    e.preventDefault();

    switch (e.key) {
      case "ArrowRight":
        if (currentFocus.startsWith("episode-")) {
          const index = parseInt(currentFocus.split("-")[1]);
          if (index < episodes.length - 1) {
            setCurrentFocus(`episode-${index + 1}`);
          }
        }
        break;
      case "ArrowLeft":
        if (currentFocus.startsWith("episode-")) {
          const index = parseInt(currentFocus.split("-")[1]);
          if (index > 0) {
            setCurrentFocus(`episode-${index - 1}`);
          }
        }
        break;
      case "ArrowDown":
        if (currentFocus === "back") {
          setCurrentFocus("favorite");
        } else if (currentFocus === "favorite") {
          setCurrentFocus("episode-0");
        } else if (currentFocus.startsWith("episode-")) {
          const index = parseInt(currentFocus.split("-")[1]);
          if (index < episodes.length - 1) {
            setCurrentFocus(`episode-${index + 1}`);
          }
        }
        break;
      case "ArrowUp":
        if (currentFocus === "favorite") {
          setCurrentFocus("back");
        } else if (currentFocus.startsWith("episode-")) {
          const index = parseInt(currentFocus.split("-")[1]);
          if (index > 0) {
            setCurrentFocus(`episode-${index - 1}`);
          } else {
            setCurrentFocus("favorite");
          }
        }
        break;
      case "Enter":
      case " ":
        if (currentFocus !== "favorite") {
          document.querySelector(`[data-focus="${currentFocus}"]`)?.click();
        }
        break;
      case "Backspace":
        navigate(-1);
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentFocus]);

  const getFocusStyle = (elementId) => ({
    outline: currentFocus === elementId ? "3px solid #FFD700" : "none", // Gold outline
    boxShadow:
      currentFocus === elementId
        ? "0 0 10px #FFD700, 0 0 20px rgba(255, 215, 0, 0.5)"
        : "none", // Gold shadow
    transform: currentFocus === elementId ? "scale(1.05)" : "none",
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
          onClick={() => navigate("/menu")}
          sx={{
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

      {/* Show Image and Description (Image on Right, Description on Left) */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        {/* Left Section: Show Description */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            height: "400px", // Match the max height of the image
            justifyContent: "space-between",
          }}
        >
          {/* Title and Description Container */}
          <Box>
            <Typography
              variant="h4"
              sx={{
                color: "black",
                fontWeight: "bold",
                mb: 3,
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: "1.2rem",
                lineHeight: 1.5,
                maxHeight: "250px",
                overflow: "auto",
              }}
            >
              This is a description of {title}. Enjoy watching your favorite
              episodes! This show brings a lot of excitement with its amazing
              plot twists and memorable characters. Stay tuned for all the
              action and drama.
            </Typography>
          </Box>

          {/* Favorite Button at Bottom */}
          <Button
            data-focus="favorite"
            variant="contained"
            onClick={handleFavoriteClick}
            startIcon={isFavorite ? <Star /> : <StarBorder />}
            sx={{
              ...getFocusStyle("favorite"),
              bgcolor: isFavorite ? "gold" : ColorPick.getSecondary(),
              color: "black",
              "&:hover": {
                bgcolor: isFavorite ? "#FFD700" : ColorPick.getSecondaryDark(),
              },
              transition: "background-color 0.3s",
              alignSelf: "flex-start",
            }}
          >
            {isFavorite ? "Favorited" : "Add to Favorites"}
          </Button>
        </Box>

        {/* Right Section: Show Image */}
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "40vw",
            maxWidth: "500px",
            height: "400px",
            objectFit: "cover",
            borderRadius: 3,
            boxShadow: 3,
          }}
        />
      </Box>

      {/* Episode Selection */}
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h6"
          sx={{ mb: 2, color: "black", fontWeight: "bold" }}
        >
          Episodes
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {episodes.map((episode, index) => (
            <Button
              key={index}
              data-focus={`episode-${index}`}
              onClick={() => handleEpisodeClick(episode)}
              variant="contained"
              sx={{
                ...getFocusStyle(`episode-${index}`),
                bgcolor: ColorPick.getSecondary(),
                color: "white",
                borderRadius: 3,
                px: 3,
                py: 1,
                boxShadow: 2,
              }}
            >
              Episode {episode}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Watch Button */}
      {selectedEpisode && (
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={() => handleEpisodeClick(selectedEpisode)} // Navigate to VideoPlay on button click
            sx={{
              bgcolor: ColorPick.getSecondary(),
              color: "white",
              px: 4,
              py: 1.5,
              borderRadius: 3,
              boxShadow: 3,
            }}
          >
            ▶ Watch {selectedEpisode}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ShowDetails;
