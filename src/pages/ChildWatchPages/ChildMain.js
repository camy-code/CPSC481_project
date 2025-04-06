import {
  Box,
  Typography,
  Button,
  Avatar,
  TextField,
  IconButton,
  CircularProgress,
} from "@mui/material";
import {
  Search,
  Timer,
  ChevronRight,
  ChevronLeft,
  AccessTime,
} from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ColorPick from "../../tools/ColorPick";
import ExitButton from "../../components/menuComponents/ExitButton";
import ConstantLib from "../../tools/ConstantLib";
import React, { useState, useEffect } from "react";

const ChildMain = () => {
  const navigate = useNavigate();
  const { profileName } = useParams();
  const kidsProfiles = ConstantLib.getKidsProfile();

  // console.log("Profile Name from URL:", profileName);
  // console.log("Available Profiles:", kidsProfiles);

  let currentProfile = profileName
    ? kidsProfiles.find(
        (profile) => profile.name.toLowerCase() === profileName.toLowerCase()
      )
    : { name: "U", imageURL: "" };

  // console.log("Found Profile:", currentProfile);

  // If no profile was found, use default
  if (!currentProfile) {
    currentProfile = { name: "U", imageURL: "" };
    console.log("Using default profile");
  }
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

  // Mock values for the timer - these would come from props or context in real app
  const totalTimeMinutes = 120; // 2 hours total
  const remainingTimeMinutes = 45; // 45 minutes remaining
  const progress =
    ((totalTimeMinutes - remainingTimeMinutes) / totalTimeMinutes) * 100;

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
          nextFocus = "timer";
        } else if (currentFocus === "timer") {
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
        } else if (currentFocus === "timer") {
          nextFocus = "resume";
        } else if (currentFocus === "recent-0") {
          nextFocus = "timer";
        } else if (currentFocus.startsWith("recent-")) {
          const index = parseInt(currentFocus.split("-")[1]);
          if (index > 0) {
            nextFocus = `recent-${index - 1}`;
            setLastRecentIndex(index - 1);
          } else {
            nextFocus = "timer";
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
        if (currentFocus === "back" || currentFocus === "logo") {
          nextFocus = "resume";
        } else if (currentFocus === "resume" || currentFocus === "timer") {
          nextFocus = `recent-${lastRecentIndex}`;
        } else if (currentFocus.startsWith("recent")) {
          nextFocus = `favorite-${lastFavoriteIndex}`;
        } else if (currentFocus.startsWith("favorite")) {
          nextFocus = "find";
        }
        break;

      case "ArrowUp":
        if (currentFocus === "find") {
          nextFocus = `favorite-${lastFavoriteIndex}`;
        } else if (currentFocus.startsWith("favorite")) {
          nextFocus = `recent-${lastRecentIndex}`;
        } else if (currentFocus.startsWith("recent")) {
          nextFocus = "resume";
        } else if (currentFocus === "resume" || currentFocus === "timer") {
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

    if (nextFocus !== currentFocus) {
      // Update last indices when moving between sections
      if (currentFocus.startsWith("recent-")) {
        setLastRecentIndex(parseInt(currentFocus.split("-")[1]));
      } else if (currentFocus.startsWith("favorite-")) {
        setLastFavoriteIndex(parseInt(currentFocus.split("-")[1]));
      }

      setCurrentFocus(nextFocus);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentFocus]);

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
      </Grid>

      {/* Resume Section with Timer */}
      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          mt: 2,
          mb: 2,
          gap: 3,
          height: 120,
        }}
      >
        <Button
          data-focus="resume"
          onClick={() =>
            navigate(`/showdetails/${profileName}`, {
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
            flex: "1 1 70%",
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            padding: 2,
            boxShadow: 3,
            justifyContent: "flex-start",
            color: "white",
            textTransform: "none",
            m: 0,
          }}
        >
          ▶ Resume Naruto
        </Button>

        <Box
          data-focus="timer"
          sx={{
            ...getFocusStyle("timer"),
            bgcolor: "rgba(255, 255, 255, 0.9)",
            borderRadius: 3,
            p: 1.5,
            flex: "0 0 auto",
            width: "200px",
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            m: 0,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <AccessTime
              sx={{
                color: ColorPick.getSecondary(),
                mr: 1,
                fontSize: "1.2rem",
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              Watch Time Left
            </Typography>
          </Box>

          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
              variant="determinate"
              value={100}
              size={65}
              thickness={4}
              sx={{
                color: "#e0e0e0",
                position: "absolute",
              }}
            />
            <CircularProgress
              variant="determinate"
              value={progress}
              size={65}
              thickness={4}
              sx={{
                color: ColorPick.getSecondary(),
                transform: "rotate(180deg)",
                circle: {
                  strokeLinecap: "round",
                },
              }}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  lineHeight: 1,
                }}
              >
                {remainingTimeMinutes}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "grey.600",
                  fontSize: "0.7rem",
                }}
              >
                min
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="caption"
            sx={{
              color: "grey.600",
              textAlign: "center",
              mt: 0.5,
            }}
          >
            of {totalTimeMinutes} minutes total
          </Typography>
        </Box>
      </Box>

      {/* Recent Section */}
      <Box sx={{ position: "relative" }}>
        <Typography
          variant="h6"
          sx={{ mb: 2, color: "black", fontWeight: "bold" }}
        >
          Recent
        </Typography>
        <Box sx={{ position: "relative" }}>
          <Box
            id="recent-shows"
            sx={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              pb: 2,
              pt: 1,
              px: 1,
              mx: -1,
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
              scrollBehavior: "smooth",
            }}
          >
            {showImages.map((image, index) => (
              <Button
                key={index}
                data-focus={`recent-${index}`}
                tabIndex={-1}
                onClick={() =>
                  navigate(`/showdetails/${profileName}`, {
                    state: {
                      title: ["Batman", "Avatar", "SpongeBob"][index % 3],
                      image: image,
                    },
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
                  flexShrink: 0,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Favorites Section */}
      <Box sx={{ position: "relative" }}>
        <Typography
          variant="h6"
          sx={{ mt: 2, mb: 1, color: "black", fontWeight: "bold" }}
        >
          Favorites
        </Typography>
        <Box sx={{ position: "relative" }}>
          <Box
            id="favorite-shows"
            sx={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              pb: 2,
              pt: 1,
              px: 1,
              mx: -1,
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
              scrollBehavior: "smooth",
            }}
          >
            {favoriteImages.map((image, index) => (
              <Button
                key={index}
                data-focus={`favorite-${index}`}
                tabIndex={-1}
                onClick={() =>
                  navigate(`/showdetails/${profileName}`, {
                    state: {
                      title: ["Batman", "Avatar", "SpongeBob"][index],
                      image: image,
                    },
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
                  flexShrink: 0,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Find a Show Button */}
      <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
        <Button
          data-focus="find"
          onClick={() => navigate(`/findShow/${profileName}`)}
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

export default ChildMain;
