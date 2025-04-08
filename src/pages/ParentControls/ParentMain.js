import { Box, Typography, Button, Avatar } from "@mui/material";
import { Search, ChevronLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ColorPick from "../../tools/ColorPick";
import { useState, useEffect } from "react";

const ParentMain = () => {
  const navigate = useNavigate();
  const showImages = [
    "/images/batman.jpg",
    "/images/avatar.jpg",
    "/images/spongebob.jpg",
    "/images/naruto.png",
    "/images/batman.jpg",
    "/images/avatar.jpg",
    "/images/spongebob.jpg",
    "/images/naruto.png",
    "/images/batman.jpg",
    "/images/avatar.jpg",
    "/images/spongebob.jpg",
    "/images/naruto.png",
    "/images/batman.jpg",
    "/images/avatar.jpg",
    "/images/spongebob.jpg",
    "/images/naruto.png",
    "/images/batman.jpg",
    "/images/avatar.jpg",
    "/images/spongebob.jpg",
    "/images/naruto.png",
  ];
  const favoriteImages = [
    "/images/batman.jpg",
    "/images/avatar.jpg",
    "/images/spongebob.jpg",
  ];

  const scrollToShow = (section, index) => {
    const containerId =
      section === "recent" ? "recent-shows" : "favorite-shows";
    const container = document.getElementById(containerId);
    const showElement = container?.querySelector(
      `[data-focus="${section}-${index}"]`
    );

    if (container && showElement) {
      const containerLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const showLeft = showElement.offsetLeft;
      const showWidth = showElement.offsetWidth;

      // Always center the item
      container.scrollTo({
        left: showLeft - containerWidth / 2 + showWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const scrollShows = (section, direction) => {
    const containerId =
      section === "recent" ? "recent-shows" : "favorite-shows";
    const container = document.getElementById(containerId);
    if (container) {
      const containerWidth = container.offsetWidth;
      const showWidth = 180; // Width of each show
      const marginRight = 16; // marginRight: 2 in rem units = 16px
      const showsPerPage = Math.floor(
        containerWidth / (showWidth + marginRight)
      );
      const scrollDistance = (showWidth + marginRight) * showsPerPage;

      // Calculate max scroll position
      const maxScroll = container.scrollWidth - container.clientWidth;
      const newScrollLeft =
        container.scrollLeft +
        (direction === "right" ? scrollDistance : -scrollDistance);

      // Ensure we don't scroll past bounds
      container.scrollTo({
        left: Math.max(0, Math.min(newScrollLeft, maxScroll)),
        behavior: "smooth",
      });
    }
  };

  const [currentFocus, setCurrentFocus] = useState("back");
  const [lastRecentIndex, setLastRecentIndex] = useState(0);
  const [lastFavoriteIndex, setLastFavoriteIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentFocus.startsWith("recent-")) {
        const index = parseInt(currentFocus.split("-")[1]);
        if (!isNaN(index)) scrollToShow("recent", index);
      } else if (currentFocus.startsWith("favorite-")) {
        const index = parseInt(currentFocus.split("-")[1]);
        if (!isNaN(index)) scrollToShow("favorite", index);
      }
    }, 0);
    return () => clearTimeout(timeout);
  }, [currentFocus]);

  const handleKeyDown = (e) => {
    e.preventDefault();

    let nextFocus = currentFocus;

    switch (e.key) {
      case "ArrowRight":
        if (currentFocus === "back") {
          nextFocus = "logo";
        } else if (currentFocus === "logo") {
          nextFocus = "resume";
        } else if (currentFocus === "resume") {
          nextFocus = `recent-${lastRecentIndex}`;
        } else if (currentFocus.startsWith("recent-")) {
          const index = parseInt(currentFocus.split("-")[1]);
          if (index < showImages.length - 1) {
            nextFocus = `recent-${index + 1}`;
            setLastRecentIndex(index + 1);
          } else {
            nextFocus = `favorite-${lastFavoriteIndex}`;
          }
        } else if (currentFocus.startsWith("favorite-")) {
          const index = parseInt(currentFocus.split("-")[1]);
          if (index < favoriteImages.length - 1) {
            nextFocus = `favorite-${index + 1}`;
            setLastFavoriteIndex(index + 1);
          } else {
            nextFocus = "find";
          }
        }
        break;

      case "ArrowLeft":
        if (currentFocus === "logo") {
          nextFocus = "back";
        } else if (currentFocus === "resume") {
          nextFocus = "logo";
        } else if (currentFocus === "recent-0") {
          nextFocus = "resume";
        } else if (currentFocus.startsWith("recent-")) {
          const index = parseInt(currentFocus.split("-")[1]);
          if (index > 0) {
            nextFocus = `recent-${index - 1}`;
            setLastRecentIndex(index - 1);
          } else {
            nextFocus = "resume";
          }
        } else if (currentFocus === "favorite-0") {
          nextFocus = `recent-${lastRecentIndex}`;
        } else if (currentFocus.startsWith("favorite-")) {
          const index = parseInt(currentFocus.split("-")[1]);
          if (index > 0) {
            nextFocus = `favorite-${index - 1}`;
            setLastFavoriteIndex(index - 1);
          } else {
            nextFocus = `recent-${lastRecentIndex}`;
          }
        } else if (currentFocus === "find") {
          nextFocus = `favorite-${lastFavoriteIndex}`;
        }
        break;

      case "ArrowDown":
        if (
          currentFocus === "back" ||
          currentFocus === "logo" ||
          currentFocus === "resume"
        ) {
          nextFocus = "recent-0";
        } else if (currentFocus.startsWith("recent-")) {
          nextFocus = "favorite-0";
        } else if (currentFocus.startsWith("favorite-")) {
          nextFocus = "find";
        }
        break;

      case "ArrowUp":
        if (currentFocus === "find") {
          nextFocus = `favorite-${lastFavoriteIndex}`;
        } else if (currentFocus.startsWith("favorite-")) {
          nextFocus = `recent-${lastRecentIndex}`;
        } else if (currentFocus.startsWith("recent-")) {
          nextFocus = "resume";
        } else if (currentFocus === "resume") {
          nextFocus = "logo";
        } else if (currentFocus === "logo") {
          nextFocus = "back";
        }
        break;

      case "Enter":
      case " ":
        document.querySelector(`[data-focus="${currentFocus}"]`)?.click();
        break;

      case "Backspace":
        navigate("/menu");
        break;
    }

    setCurrentFocus(nextFocus);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentFocus, lastRecentIndex, lastFavoriteIndex]);

  const getFocusStyle = (elementId) => ({
    outline: currentFocus === elementId ? "3px solid #FFD700" : "none",
    boxShadow:
      currentFocus === elementId
        ? "0 0 10px #FFD700, 0 0 20px rgba(255, 215, 0, 0.5)"
        : "none",
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
      {/* Header with Exit Button and Title Aligned */}
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 3 }}
      >
        <Button
          data-focus="back"
          onClick={() => navigate("/menu")}
          sx={{
            ...getFocusStyle("back"),
            backgroundColor: ColorPick.getSecondary(),
            color: "white",
            fontSize: "1.2rem",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            gap: 1,
            borderRadius: 2,
            px: 2,
            py: 1,
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
        <Avatar sx={{ bgcolor: ColorPick.getSecondary(), color: "black" }}>
          U
        </Avatar>
      </Grid>

      {/* Resume Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
          mb: 2,
        }}
      >
        <Button
          data-focus="resume"
          onClick={() =>
            navigate(`/showdetails/parent`, {
              state: {
                title: "Naruto",
                image: "/images/naruto.png",
              },
            })
          }
          sx={{
            ...getFocusStyle("resume"),
            backgroundImage: "url('/images/naruto.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: 120,
            width: "75%",
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            padding: 2,
            boxShadow: 3,
            justifyContent: "flex-start",
            color: "white",
            textTransform: "none",
          }}
        >
          ▶ Resume Naruto
        </Button>
      </Box>

      {/* Recent Section with Clickable Shows */}
      <Typography
        variant="h6"
        sx={{ mb: 2, color: "black", fontWeight: "bold" }}
      >
        Recent
      </Typography>
      <Box
        id="recent-shows"
        sx={{ overflowX: "auto", whiteSpace: "nowrap", pb: 2 }}
      >
        {showImages.map((image, index) => (
          <Button
            key={index}
            data-focus={`recent-${index}`}
            onClick={() =>
              navigate(`/showdetails/parent`, {
                state: { title: "Show Title", image: image },
              })
            }
            sx={{
              ...getFocusStyle(`recent-${index}`),
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: 180,
              height: 130,
              marginRight: 2,
              borderRadius: 3,
              boxShadow: 2,
            }}
          ></Button>
        ))}
      </Box>

      {/* Favorites Section with Clickable Shows */}
      <Typography
        variant="h6"
        sx={{ mt: 2, mb: 1, color: "black", fontWeight: "bold" }}
      >
        Favorites
      </Typography>
      <Box
        id="favorite-shows"
        sx={{ overflowX: "auto", whiteSpace: "nowrap", pb: 2 }}
      >
        {favoriteImages.map((image, index) => (
          <Button
            key={index}
            data-focus={`favorite-${index}`}
            onClick={() =>
              navigate(`/showdetails/parent`, {
                state: { title: "Show Title", image: image },
              })
            }
            sx={{
              ...getFocusStyle(`favorite-${index}`),
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: 180,
              height: 130,
              marginRight: 2,
              borderRadius: 3,
              boxShadow: 2,
            }}
          ></Button>
        ))}
      </Box>

      {/* Find a Show Button */}
      <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
        <Button
          data-focus="find"
          onClick={() => navigate("/findShow")}
          variant="contained"
          sx={{
            ...getFocusStyle("find"),
            bgcolor: ColorPick.getSecondary(),
            color: "white",
            fontSize: "1.2rem",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: 3,
            boxShadow: 3,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Search sx={{ color: "white" }} />
          Find a Show
        </Button>
      </Box>
    </Box>
  );
};

export default ParentMain;
