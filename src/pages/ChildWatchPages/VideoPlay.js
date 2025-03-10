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
  const [showControls, setShowControls] = useState(true);

  // Video control functions
  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
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
    if (!isFullscreen) {
      containerRef.current.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  // Update time as video plays
  const handleTimeUpdate = () => {
    const progress =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(progress || 0);
  };

  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
      }}
    >
      {/* Header */}
      <Box sx={{ width: "100%", mb: 2 }}>
        <Button
          onClick={() => window.history.back()}
          variant="contained"
          sx={{
            bgcolor: ColorPick.getSecondary(),
            color: "black",
            borderRadius: "1rem",
            px: 2,
            py: 1,
            "&:hover": { bgcolor: ColorPick.getSecondaryDark() },
          }}
        >
          ← Go Back
        </Button>
        <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
          Now Playing: Episode 1
        </Typography>
      </Box>

      {/* Video Container */}
      <Box
        ref={containerRef}
        sx={{
          width: "100%",
          maxWidth: "90vw",
          aspectRatio: "16/9",
          position: "relative",
          borderRadius: "1rem",
          overflow: "hidden",
          mb: "2rem", // margin bottom for spacing
        }}
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          src="/videos/sample.mp4"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          onTimeUpdate={handleTimeUpdate}
          onClick={handlePlayPause}
        />

        {/* Overlay Controls (Fixed at the bottom) */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
            opacity: showControls ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          {/* Progress Bar */}
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            style={{
              width: "100%",
              height: "4px",
              marginBottom: "1rem",
              cursor: "pointer",
              WebkitAppearance: "none",
              background: `linear-gradient(to right, ${ColorPick.getSecondary()} ${progress}%, #555 ${progress}%)`,
            }}
          />

          {/* Bottom Controls */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              onClick={handlePlayPause}
              sx={{
                color: "white",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
              }}
            >
              {isPlaying ? (
                <Pause fontSize="large" />
              ) : (
                <PlayArrow fontSize="large" />
              )}
            </IconButton>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton sx={{ color: "white" }}>
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
                  width: "100px",
                  height: "4px",
                  cursor: "pointer",
                  WebkitAppearance: "none",
                  background: `linear-gradient(to right, ${ColorPick.getSecondary()} ${
                    volume * 100
                  }%, #555 ${volume * 100}%)`,
                }}
              />
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <IconButton
              onClick={toggleFullscreen}
              sx={{
                color: "white",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
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
