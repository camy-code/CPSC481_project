import { Box, Typography, Button, Avatar } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import ColorPick from "../../tools/ColorPick";

const SELECTED_EPISODE_COLOR = "#6A5ACD";

const ShowDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, image } = location.state || {
    title: "Unknown Show",
    image: "",
  };

  const episodes = Array.from({ length: 10 }, (_, i) => `Episode ${i + 1}`);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  // Function to handle navigation to VideoPlay
  const handleEpisodeClick = (episode) => {
    setSelectedEpisode(episode);
    navigate("/videoPlay", { state: { episode } }); // Navigate to VideoPlay with episode data
  };

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
          {title}
        </Typography>
        <Avatar sx={{ bgcolor: ColorPick.getSecondary(), color: "black" }}>
          U
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
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{ color: "black", fontSize: "1.2rem", lineHeight: 1.5 }}
          >
            This is a description of {title}. Enjoy watching your favorite
            episodes! This show brings a lot of excitement with its amazing plot
            twists and memorable characters. Stay tuned for all the action and
            drama.
          </Typography>
        </Box>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "40vw",
            maxWidth: "500px",
            borderRadius: 3,
            boxShadow: 3,
          }}
        />
      </Box>

      {/* Episode Selection */}
      <Typography
        variant="h6"
        sx={{ mb: 2, fontWeight: "bold", color: "black" }}
      >
        Select an Episode
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {episodes.map((episode, index) => (
          <Button
            key={index}
            variant="contained"
            onClick={() => handleEpisodeClick(episode)} // Navigate to VideoPlay on episode click
            sx={{
              bgcolor:
                selectedEpisode === episode
                  ? SELECTED_EPISODE_COLOR
                  : ColorPick.getSecondary(),
              color: "white",
              borderRadius: 3,
              px: 3,
              py: 1,
              boxShadow: 2,
            }}
          >
            {episode}
          </Button>
        ))}
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
