import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Button, IconButton, Avatar } from "@mui/material";
import {
  Fullscreen,
  FullscreenExit,
  VolumeUp,
  VolumeOff,
  PlayArrow,
  Pause,
} from "@mui/icons-material";
import ColorPick from "../../tools/ColorPick";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import ConstantLib from "../../tools/ConstantLib";
import Grid2 from "@mui/material/Grid2";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const VideoPlayer = () => {
  const location = useLocation();
  const { profileName } = useParams();
  const navigate = useNavigate();

  const { episode, showTitle, image } = location.state || {
    episode: 1,
    showTitle: "Unknown Show",
    image: "",
  };

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

  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentFocus, setCurrentFocus] = useState("back");

  const handlePlayPause = () => {
    try {
      if (isPlaying) {
        videoRef.current?.pause();
      } else {
        const playPromise = videoRef.current?.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Silently handle the error
          });
        }
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      // Silently handle the error
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const handleProgressChange = (e) => {
    if (videoRef.current && duration > 0) {
      const newTime = (parseFloat(e.target.value) / 100) * duration;
      if (isFinite(newTime)) {
        videoRef.current.currentTime = newTime;
        setProgress(e.target.value);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const videoDuration = videoRef.current.duration;
      if (isFinite(videoDuration) && videoDuration > 0) {
        setDuration(videoDuration);
        setProgress((currentTime / videoDuration) * 100);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const videoDuration = videoRef.current.duration;
      if (isFinite(videoDuration)) {
        setDuration(videoDuration);
      }
    }
  };

  const toggleFullscreen = () => {
    if (isFullscreen) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    } else {
      containerRef.current.requestFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowRight":
        if (currentFocus === "back") setCurrentFocus("play");
        else if (currentFocus === "play") setCurrentFocus("volume");
        else if (currentFocus === "volume") setCurrentFocus("fullscreen");
        break;
      case "ArrowLeft":
        if (currentFocus === "fullscreen") setCurrentFocus("volume");
        else if (currentFocus === "volume") setCurrentFocus("play");
        else if (currentFocus === "play") setCurrentFocus("back");
        break;
      case "Enter":
      case " ":
        if (currentFocus !== "volume") {
          e.preventDefault();
          document.querySelector(`[data-focus="${currentFocus}"]`)?.click();
        }
        break;
      case "Backspace":
        e.preventDefault();
        window.history.back();
        break;
      // Media control shortcuts
      case "k":
      case "p":
        handlePlayPause();
        break;
      case "m":
        setVolume(volume > 0 ? 0 : 1);
        break;
      case "f":
        toggleFullscreen();
        break;
      case "ArrowUp":
        if (currentFocus === "volume") {
          const newVolume = Math.min(1, volume + 0.1);
          setVolume(newVolume);
          videoRef.current.volume = newVolume;
        }
        break;
      case "ArrowDown":
        if (currentFocus === "volume") {
          const newVolume = Math.max(0, volume - 0.1);
          setVolume(newVolume);
          videoRef.current.volume = newVolume;
        }
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentFocus, volume]);

  const getFocusStyle = (elementId) => ({
    outline:
      currentFocus === elementId
        ? "3px solid rgba(255, 255, 255, 0.8)"
        : "none",
    boxShadow:
      currentFocus === elementId ? "0 0 8px rgba(255, 255, 255, 0.5)" : "none",
    transform: currentFocus === elementId ? "scale(1.05)" : "none",
    transition: "all 0.2s ease",
    position: "relative",
    zIndex: currentFocus === elementId ? 1 : "auto",
  });

  return (
    <Box
      sx={{
        bgcolor: ColorPick.getPrimary(),
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          mb: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          data-focus="back"
          onClick={() => window.history.back()}
          sx={{
            ...getFocusStyle("back"),
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
              transform: "scale(1.1)",
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

      <Typography
        variant="h5"
        sx={{
          mb: 2,
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Now Playing: {showTitle} - Episode {episode}
      </Typography>

      <Box
        ref={containerRef}
        onClick={(e) => {
          // Don't trigger play/pause if clicking on controls
          if (!e.target.closest(".video-controls")) {
            handlePlayPause();
          }
        }}
        onDoubleClick={(e) => {
          e.stopPropagation(); // Prevent triggering the click handler
          toggleFullscreen();
        }}
        sx={{
          width: "100%",
          maxWidth: "80vw",
          aspectRatio: "16/9",
          position: "relative",
          borderRadius: "0.75rem",
          overflow: "hidden",
          mx: "auto",
          border: "3px solid black",
          bgcolor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          "&:hover": {
            "& .playOverlay": {
              opacity: 1,
            },
          },
        }}
      >
        {!isPlaying && (
          <Box
            className="playOverlay"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              opacity: 0,
              transition: "opacity 0.2s",
              bgcolor: "rgba(0,0,0,0.5)",
              borderRadius: "50%",
              p: 1,
            }}
          >
            <PlayArrow sx={{ fontSize: 60, color: "white" }} />
          </Box>
        )}
        {!isPlaying && image && (
          <Box
            component="img"
            src={image}
            alt={showTitle}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        )}
        <video
          ref={videoRef}
          src="/videos/sample.mp4"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: isPlaying ? "block" : "none",
          }}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        />
        <Box
          className="video-controls"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            p: 1,
            background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
          }}
          onClick={(e) => e.stopPropagation()} // Prevent play/pause when clicking controls
        >
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            style={{
              width: "100%",
              height: "4px",
              cursor: "pointer",
              background: `linear-gradient(to right, ${ColorPick.getSecondary()} ${progress}%, #555 ${progress}%)`,
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
            <IconButton
              data-focus="play"
              onClick={(e) => {
                e.stopPropagation();
                handlePlayPause();
              }}
              sx={{
                ...getFocusStyle("play"),
                color: "white",
              }}
            >
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton
              data-focus="volume"
              onClick={(e) => {
                e.stopPropagation();
                setVolume(volume > 0 ? 0 : 1);
                if (videoRef.current) {
                  videoRef.current.volume = volume > 0 ? 0 : 1;
                }
              }}
              sx={{
                ...getFocusStyle("volume"),
                color: "white",
              }}
            >
              {volume > 0 ? <VolumeUp /> : <VolumeOff />}
            </IconButton>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "80px",
                cursor: "pointer",
                background: `linear-gradient(to right, ${ColorPick.getSecondary()} ${
                  volume * 100
                }%, #555 ${volume * 100}%)`,
              }}
            />
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
              data-focus="fullscreen"
              onClick={(e) => {
                e.stopPropagation();
                toggleFullscreen();
              }}
              sx={{
                ...getFocusStyle("fullscreen"),
                color: "white",
              }}
            >
              {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoPlayer;
