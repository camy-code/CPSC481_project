import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import {
  Fullscreen,
  FullscreenExit,
  VolumeUp,
  VolumeOff,
  PlayArrow,
  Pause,
} from "@mui/icons-material";
import ColorPick from "../../tools/ColorPick";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
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
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setProgress(e.target.value);
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

  const handleTimeUpdate = () => {
    setProgress(
      (videoRef.current.currentTime / videoRef.current.duration) * 100 || 0
    );
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
        bgcolor: "black",
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          mb: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          data-focus="back"
          onClick={() => window.history.back()}
          variant="contained"
          sx={{
            ...getFocusStyle("back"),
            bgcolor: ColorPick.getSecondary(),
            color: "white",
            borderRadius: "1rem",
            px: 2,
            py: 1,
          }}
        >
          ← Back
        </Button>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Now Playing: Episode 1
        </Typography>
      </Box>

      <Box
        ref={containerRef}
        sx={{
          width: "100%",
          maxWidth: "90vw",
          aspectRatio: "16/9",
          position: "relative",
          borderRadius: "0.75rem",
          overflow: "hidden",
          mb: 2,
        }}
      >
        <video
          ref={videoRef}
          src="/videos/sample.mp4"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          onTimeUpdate={handleTimeUpdate}
          onClick={handlePlayPause}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            p: 1,
            background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
          }}
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
              onClick={handlePlayPause}
              sx={{
                ...getFocusStyle("play"),
                color: "white",
              }}
            >
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton
              data-focus="volume"
              onClick={() => setVolume(volume > 0 ? 0 : 1)}
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
              onClick={toggleFullscreen}
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
