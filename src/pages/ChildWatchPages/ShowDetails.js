import { Box, Typography, Button, Avatar, IconButton } from "@mui/material";
import { ArrowBack, Star, StarBorder, ChevronLeft } from "@mui/icons-material";
import { useNavigate, useLocation, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ColorPick from "../../tools/ColorPick";
import ConstantLib from "../../tools/ConstantLib";
import Grid2 from "@mui/material/Grid2";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import {
  getFavorites,
  saveFavorite,
  removeFavorite,
} from "../../tools/StorageUtils";
import { Snackbar, Alert } from "@mui/material";

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

  const showDescriptions = {
    Avatar:
      "Meet Aang, a special boy who can control the air! He goes on a big adventure with his friends to learn how to control water, earth, and fire too. Together, they make new friends and help people while learning important lessons about being kind and working together. Every day is a new fun adventure!",
    Backyardigans:
      "Watch Pablo, Tyrone, Uniqua, Tasha, and Austin play in their backyard! They use their big imaginations to turn their playtime into amazing adventures. They sing fun songs and dance while pretending to be space explorers, pirates, or even kings and queens. Every day is a new fun game!",
    Batman:
      "See Batman keep his city safe from bad guys! He is very smart and strong, and he has cool tools to help him. With his friends Robin and Batgirl, they stop the bad guys and help good people. Batman shows us how to be brave and help others!",
    "Cory in the House":
      "Cory moves into a very special house - the White House! His dad cooks there, and Cory makes new friends and has fun adventures. He learns how to be a good friend and solve problems while living in this famous place. Every day is full of laughs and learning!",
    "Danny Phantom":
      "Danny is a regular boy who becomes part ghost! He can turn invisible and fly, which helps him stop bad ghosts. With his friends Sam and Tucker, they have exciting adventures while keeping their town safe. Danny learns how to be brave and help others!",
    "Dora the Explorer":
      "Come along with Dora and her monkey friend Boots! They go on fun trips and need your help to solve puzzles and find their way. They teach you Spanish words and show you how to be a good friend. Every adventure is a chance to learn something new!",
    "Drake & Josh":
      "Meet Drake and Josh, two brothers who are very different but best friends! They go to school together, play in a band, and have funny adventures. Even when they make mistakes, they learn how to fix them and help each other. Every day is a new funny story!",
    "Fairly OddParents":
      "Timmy is a regular boy with special fairy friends! His fairies can make his wishes come true, but sometimes that causes funny problems. Timmy learns that it's important to think carefully about what you wish for. Every day is a magical adventure!",
    Franklin:
      "Follow Franklin the turtle and his animal friends! They play together, help each other, and learn important things about being a good friend. Franklin shows us how to share, tell the truth, and be kind to others. Every story teaches us something new!",
    "Handy Manny":
      "Meet Manny and his talking tools! They help people fix things and solve problems in their town. Manny shows us how to work together and help our friends. Every job is a chance to learn something new and make someone happy!",
    "Hannah Montana":
      "Miley is a regular girl with a big secret - she's also a famous singer! She learns how to balance school, friends, and her singing while keeping her secret safe. The show teaches us about being true to ourselves and working hard for our dreams!",
    "Harry and His Bucket Full of Dinosaurs":
      "Harry has a special bucket of toy dinosaurs that come to life! They go on fun adventures together and learn about sharing and being good friends. Every day is a new exciting trip with his dinosaur pals!",
    iCarly:
      "Carly and her friends make a fun show on the computer! They tell jokes, show talents, and have silly adventures. The show teaches us about friendship, creativity, and having fun while being responsible. Every episode is full of laughs!",
    "Johnny Test":
      "Johnny has two super-smart sisters who make cool inventions! Sometimes their experiments cause funny problems that Johnny has to help fix. The show is full of action and laughs while teaching us about family and creativity!",
    "Kim Possible":
      "Kim is a regular high school girl who also saves the world! With her best friend Ron, they stop bad guys and solve problems while going to school. The show teaches us about being brave, helping others, and being a good friend!",
    "Max & Ruby":
      "Meet Max and Ruby, bunny brother and sister! Ruby likes to be in charge, but Max has his own fun way of doing things. Together, they learn about sharing, listening, and being good siblings. Every day is a new fun adventure!",
    "Peppa Pig":
      "Follow Peppa and her family on fun adventures! They play games, visit friends, and learn new things together. The show teaches us about family, friendship, and having fun while learning. Every day is a new happy story!",
    "Phineas and Ferb":
      "Phineas and Ferb are brothers who make amazing things during summer vacation! Their sister Candace tries to tell on them, but their mom never sees their creations. The show is full of fun songs and teaches us about creativity and family!",
    SpongeBob:
      "Meet SpongeBob, a happy sponge who lives under the sea! He works at a restaurant, plays with his best friend Patrick, and has funny adventures. The show teaches us about staying positive and being a good friend. Every day is a new funny story!",
    "Super Why":
      "Whyatt and his friends can jump into storybooks! They help characters solve problems by using the power of reading. The show teaches us about letters, words, and how to solve problems. Every story is a new learning adventure!",
    "The Suite Life of Zack & Cody":
      "Zack and Cody are twins who live in a fancy hotel! They have fun adventures while their mom works there. The show teaches us about family, friendship, and learning from our mistakes. Every day is a new funny story!",
    "Wonder Pets":
      "Meet Linny, Tuck, and Ming-Ming, three classroom pets who help animals in trouble! They work together to save baby animals and learn about teamwork. The show teaches us about helping others and working together. Every rescue is a new adventure!",
  };

  const showEpisodeCounts = {
    Avatar: 61,
    Backyardigans: 80,
    Batman: 65,
    "Cory in the House": 34,
    "Danny Phantom": 53,
    "Dora the Explorer": 178,
    "Drake & Josh": 57,
    "Fairly OddParents": 172,
    Franklin: 78,
    "Handy Manny": 78,
    "Hannah Montana": 98,
    "Harry and His Bucket Full of Dinosaurs": 52,
    iCarly: 97,
    "Johnny Test": 117,
    "Kim Possible": 87,
    "Max & Ruby": 96,
    "Peppa Pig": 369,
    "Phineas and Ferb": 129,
    SpongeBob: 272,
    "Super Why": 103,
    "The Suite Life of Zack & Cody": 87,
    "Wonder Pets": 60,
  };

  // Generate episodes based on show's actual episode count
  const episodes = Array.from(
    { length: showEpisodeCounts[title] || 10 },
    (_, i) => ({
      number: i + 1,
      title: `Episode ${i + 1}`,
    })
  );

  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Check if show is already favorited
    const favorites = getFavorites(profileName);
    setIsFavorite(favorites.some((fav) => fav.title === title));
  }, [profileName, title]);

  // Function to handle navigation to VideoPlay
  const handleEpisodeClick = (episode) => {
    setSelectedEpisode(episode);
    navigate(`/videoplay/${profileName}`, {
      state: {
        episode: episode.number,
        showTitle: title,
        image,
      },
    });
  };

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(profileName, title);
      setSuccess(true);
    } else {
      saveFavorite(profileName, { title, image });
      setSuccess(true);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <>
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
            onClick={() => navigate(-1)}
            sx={{
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
            onClick={() => {
              navigate("/kickout");
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
            alignItems: "flex-start",
            mb: 4,
            gap: 4,
          }}
        >
          {/* Left Section: Show Description */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* Title and Description Container */}
            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  fontSize: "1.2rem",
                  lineHeight: 1.5,
                  mb: 3,
                }}
              >
                {showDescriptions[title] ||
                  `This is a description of ${title}. Enjoy watching your favorite episodes! This show brings a lot of excitement with its amazing plot twists and memorable characters. Stay tuned for all the action and drama.`}
              </Typography>
            </Box>

            {/* Favorite Button */}
            <Button
              variant="contained"
              onClick={handleFavoriteClick}
              startIcon={isFavorite ? <Star /> : <StarBorder />}
              sx={{
                bgcolor: isFavorite ? "gold" : ColorPick.getSecondary(),
                color: "white",
                "&:hover": {
                  bgcolor: isFavorite
                    ? "#FFD700"
                    : ColorPick.getSecondaryHOVER(),
                  transform: "scale(1.1)",
                  transition: "transform 0.2s ease-in-out",
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
              width: "50vw",
              maxWidth: "600px",
              height: "auto",
              maxHeight: "500px",
              objectFit: "contain",
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
            Episodes ({showEpisodeCounts[title] || "Unknown"} total)
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              pb: 4,
              "& > button": {
                flex: "0 1 calc(20% - 16px)", // 5 buttons per row, accounting for gap
                minWidth: "150px", // Minimum width for each button
                maxWidth: "200px", // Maximum width for each button
                height: "48px", // Consistent height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            {episodes.map((episode) => (
              <Button
                key={episode.number}
                onClick={() => handleEpisodeClick(episode)}
                variant="contained"
                sx={{
                  bgcolor: ColorPick.getSecondary(),
                  color: "white",
                  borderRadius: 3,
                  px: 3,
                  py: 1,
                  boxShadow: 2,
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: ColorPick.getSecondaryHOVER(),
                    transform: "scale(1.1)",
                    transition: "transform 0.2s ease-in-out",
                  },
                }}
              >
                Episode {episode.number}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Watch Button */}
        {selectedEpisode && (
          <Box sx={{ mt: 2, textAlign: "center", pb: 4 }}>
            <Button
              variant="contained"
              onClick={() => handleEpisodeClick(selectedEpisode)}
              sx={{
                bgcolor: ColorPick.getSecondary(),
                color: "white",
                px: 4,
                py: 1.5,
                borderRadius: 3,
                boxShadow: 3,
                fontSize: "1.1rem",
                "&:hover": {
                  backgroundColor: ColorPick.getSecondaryHOVER(),
                  transform: "scale(1.1)",
                  transition: "transform 0.2s ease-in-out",
                },
              }}
            >
              ▶ Watch Episode {selectedEpisode.number}
            </Button>
          </Box>
        )}
      </Box>

      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {isFavorite ? "Added to favorites!" : "Removed from favorites!"}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ShowDetails;
