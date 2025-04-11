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
  StarBorder,
} from "@mui/icons-material";
import { useNavigate, useParams, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ColorPick from "../../tools/ColorPick";
import ExitButton from "../../components/menuComponents/ExitButton";
import ConstantLib from "../../tools/ConstantLib";
import React, { useState, useEffect } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Grid2 from "@mui/material/Grid2";
import {
  getFavorites,
  isShowRestricted,
  getTimeLimit,
} from "../../tools/StorageUtils";
import { getProfileLockStatus } from "../../pages/ParentControls/ScreenTime";

const ChildMain = () => {
  const navigate = useNavigate();
  const { profileName } = useParams();
  const kidsProfiles = ConstantLib.getKidsProfile();
  const [favoriteShows, setFavoriteShows] = useState([]);
  const [timeLimit, setTimeLimit] = useState(0);
  const [timeUsed, setTimeUsed] = useState(0);

  useEffect(() => {
    // Check if profile is locked, redirect to kickout page if so
    if (profileName) {
      const isLocked = getProfileLockStatus(profileName);
      if (isLocked) {
        navigate("/kickout?reason=locked");
      }
    }

    // Load favorites from storage
    const favorites = getFavorites(profileName);
    // Filter out restricted shows from favorites
    const filteredFavorites = favorites.filter(
      (show) => !isShowRestricted(profileName, show.title)
    );
    setFavoriteShows(filteredFavorites);

    // Load time limit for this profile
    const limit = getTimeLimit(profileName);
    setTimeLimit(limit);

    // For demo purposes, set a random amount of time used
    // In a real app, you would track actual usage
    setTimeUsed(Math.floor(Math.random() * 30));
  }, [profileName]);

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

  // Calculate remaining time
  const remainingTimeMinutes = timeLimit
    ? Math.max(0, timeLimit - timeUsed)
    : 0;

  // Format time as hours and minutes
  const formatTime = (minutes) => {
    if (!minutes && timeLimit === 0) return "∞";

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (hours > 0) {
      return `${hours}h ${mins}m`;
    } else {
      return `${mins}m`;
    }
  };

  // Calculate progress - if no limit set, show full
  const progress = timeLimit
    ? ((timeLimit - remainingTimeMinutes) / timeLimit) * 100
    : 0;

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

  const recentShows = [
    { title: "Drake & Josh", image: "/images/drake_Josh.jpg" },
    { title: "Kim Possible", image: "/images/kim_possible.jpg" },
    { title: "Cory in the House", image: "/images/cory.jpg" },
    { title: "Hannah Montana", image: "/images/hannah-montana.jpg" },
    { title: "Wonder Pets", image: "/images/wonder_pets.jpg" },
    { title: "Franklin", image: "/images/franklin.png" },
    { title: "Danny Phantom", image: "/images/DannyPhantom.jpg" },
    { title: "Backyardigans", image: "/images/backyardigans.jpg" },
    { title: "Handy Manny", image: "/images/HandyManny.jpg" },
    { title: "Phineas and Ferb", image: "/images/phineas_and_ferb.png" },
    { title: "iCarly", image: "/images/iCarly.jpg" },
    { title: "Zach & Cody", image: "/images/zach_Cody.webp" },
    { title: "Fairly OddParents", image: "/images/Fairly_OddParents.webp" },
    { title: "Dora", image: "/images/Dora.jpg" },
    { title: "Max and Ruby", image: "/images/max_and_ruby.jpg" },
  ];

  // Filter out restricted shows from both recent and favorites
  const filteredRecentShows = recentShows.filter(
    (show) => !isShowRestricted(profileName, show.title)
  );

  // Get all available shows from ConstantLib
  const allShows = ConstantLib.getShows();

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
          component={Link}
          to="/menu"
          sx={{
            backgroundColor: ColorPick.getSecondary(),
            padding: 1,
            paddingRight: 2,
            textTransform: "none",
            "&:hover": {
              backgroundColor: ColorPick.getSecondaryHOVER(),
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
              transform: "scale(1.05)",
              transition: "transform 0.2s ease-in-out",
            },
          }}
          onClick={() => {
            navigate("/kickout");
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
          onClick={() =>
            navigate(`/videoPlay/${profileName}`, {
              state: {
                title: "Naruto",
                image: "/images/naruto.png",
              },
            })
          }
          sx={{
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
            "&:hover": {
              opacity: 0.9,
              transform: "scale(1.02)",
            },
          }}
        >
          ▶ Resume Naruto
        </Button>

        <Box
          sx={{
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
              value={timeLimit ? 100 - progress : 100}
              size={65}
              thickness={4}
              sx={{
                color:
                  timeLimit && remainingTimeMinutes <= 0
                    ? "red"
                    : ColorPick.getSecondary(),
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
                variant="body1"
                sx={{
                  color:
                    timeLimit && remainingTimeMinutes <= 0 ? "red" : "black",
                  fontWeight: "bold",
                  lineHeight: 1,
                  fontSize: "0.85rem",
                  textAlign: "center",
                  padding: "2px",
                  maxWidth: "90%",
                }}
              >
                {formatTime(remainingTimeMinutes)}
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
            {timeLimit
              ? `Of ${formatTime(timeLimit)} total`
              : "No time limit set"}
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
            {filteredRecentShows.map((show, index) => (
              <Button
                key={index}
                tabIndex={-1}
                onClick={() =>
                  navigate(`/showdetails/${profileName}`, {
                    state: {
                      title: show.title,
                      image: show.image,
                    },
                  })
                }
                sx={{
                  backgroundImage: `url(${show.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: 250,
                  height: 150,
                  marginRight: 3,
                  borderRadius: 3,
                  boxShadow: 2,
                  flexShrink: 0,
                  "&:hover": {
                    opacity: 0.9,
                    transform: "scale(1.1)",
                    transition: "transform 0.2s ease-in-out",
                  },
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
          {favoriteShows.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
                bgcolor: "rgba(255, 255, 255, 0.8)",
                borderRadius: 3,
                boxShadow: 2,
                textAlign: "center",
                height: 120,
                width: "100%",
                flexShrink: 0,
              }}
            >
              <StarBorder
                sx={{ fontSize: 30, color: ColorPick.getSecondary(), mb: 1 }}
              />
              <Typography
                variant="h6"
                sx={{ color: "black", mb: 1, fontSize: "1rem" }}
              >
                No Favorites Yet
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "black", fontSize: "0.8rem" }}
              >
                Click the star icon on any show to add it here
              </Typography>
            </Box>
          ) : (
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
              {favoriteShows.map((show, index) => (
                <Button
                  key={index}
                  tabIndex={-1}
                  onClick={() =>
                    navigate(`/showdetails/${profileName}`, {
                      state: {
                        title: show.title,
                        image: show.image,
                      },
                    })
                  }
                  sx={{
                    backgroundImage: `url(${show.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: 250,
                    height: 150,
                    marginRight: 3,
                    borderRadius: 3,
                    boxShadow: 2,
                    flexShrink: 0,
                    "&:hover": {
                      opacity: 0.9,
                      transform: "scale(1.1)",
                      transition: "transform 0.2s ease-in-out",
                    },
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
      </Box>

      {/* Find a Show Button */}
      <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => navigate(`/findShow/${profileName}`)}
          variant="contained"
          sx={{
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
            "&:hover": {
              backgroundColor: ColorPick.getSecondaryHOVER(),
              transform: "scale(1.05)",
            },
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
