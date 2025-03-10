import { Box, Typography, Button, Avatar, TextField } from "@mui/material";
import { Search, Timer } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ColorPick from "../../tools/ColorPick";
import ExitButton from "../../components/menuComponents/ExitButton";

const ChildMain = () => {
  const navigate = useNavigate();
  const showImages = [
    "/images/batman.jpg",
    "/images/avatar.jpg",
    "/images/spongebob.jpg",
    "/images/batman.jpg",
    "/images/avatar.jpg",
    "/images/spongebob.jpg",
    "/images/batman.jpg",
    "/images/avatar.jpg",
    "/images/spongebob.jpg",
    "/images/batman.jpg",
  ];
  const favoriteImages = [
    "/images/batman.jpg",
    "/images/avatar.jpg",
    "/images/spongebob.jpg",
  ];

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
        <ExitButton to1="/menu" label="Go Back" />
        <Typography variant="h5" sx={{ color: "black", fontWeight: "bold" }}>
          KiddoFlix
        </Typography>
        <Avatar sx={{ bgcolor: ColorPick.getSecondary(), color: "black" }}>
          U
        </Avatar>
      </Grid>

      {/* Resume Section with Timer Moved */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 2,
          mb: 2,
        }}
      >
        <Button
          onClick={() => console.log("Resuming Naruto...")}
          sx={{
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
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Timer sx={{ color: "black", fontSize: 80 }} />
          <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }}>
            45 minutes left
          </Typography>
        </Box>
      </Box>

      {/* Recent Section with Clickable Shows */}
      <Typography
        variant="h6"
        sx={{ mb: 2, color: "black", fontWeight: "bold" }}
      >
        Recent
      </Typography>
      <Box sx={{ overflowX: "auto", whiteSpace: "nowrap", pb: 2 }}>
        {showImages.map((image, index) => (
          <Button
            key={index}
            sx={{
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
      <Box sx={{ overflowX: "auto", whiteSpace: "nowrap", pb: 2 }}>
        {favoriteImages.map((image, index) => (
          <Button
            key={index}
            sx={{
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
          onClick={() => navigate("/findShow")}
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
