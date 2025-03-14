import React, { useState, useRef } from "react";
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

  const handlePlayPause = () => {
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
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
    isFullscreen
      ? document.exitFullscreen()
      : containerRef.current.requestFullscreen();
    setIsFullscreen(!isFullscreen);
  };

  const handleTimeUpdate = () => {
    setProgress(
      (videoRef.current.currentTime / videoRef.current.duration) * 100 || 0
    );
  };

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
          onClick={() => window.history.back()}
          variant="contained"
          sx={{
            bgcolor: ColorPick.getSecondary(),
            color: "black",
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
            <IconButton onClick={handlePlayPause} sx={{ color: "white" }}>
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton
              onClick={() => setVolume(volume > 0 ? 0 : 1)}
              sx={{ color: "white" }}
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
            <IconButton onClick={toggleFullscreen} sx={{ color: "white" }}>
              {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoPlayer;
