const kidsProf = [
  {
    name: "Cam",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjStDrFOPPPRG4vqUB28jlvvP_cPioFuqDA&s",
  },
  {
    name: "Dawson",
    imageURL: "https://pbs.twimg.com/media/FH5Iq-VWYAMxYCQ.jpg",
  },
];

// I will be honest, this was all GBT
const shows = [
  {
    title: "SpongeBob SquarePants",
    desc: "A story about a sponge who lives in a pineapple under the sea.",
    trailer: "https://youtu.be/xvFZjo5PgG0?si=2TvY-z2g856R-Bhs",
    thumbnail: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4EX99oKFpBT2TIA6M5sL4zu6Ao8IaC13koIQNEBBD-qQHlVlMJSRjQbmjjX-8FFii0zEL",
    rating: "PG",
    age: "7+",
    genre: "Animation, Comedy",
  },
  {
    title: "Avatar: The Last Airbender",
    desc: "A young Airbender must master the four elements to save the world.",
    trailer: "https://youtu.be/d1EnW4kn1kg",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_The_Last_Airbender_logo.svg",
    rating: "TV-Y7",
    age: "8+",
    genre: "Animation, Action, Adventure",
  },
  {
    title: "Breaking Bad",
    desc: "A high school chemistry teacher turns to cooking meth to secure his family's future.",
    trailer: "https://youtu.be/HhesaQXLuRY",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png",
    rating: "TV-MA",
    age: "17+",
    genre: "Crime, Drama, Thriller",
  },
  {
    title: "Stranger Things",
    desc: "A group of kids uncover supernatural mysteries in their small town.",
    trailer: "https://youtu.be/b9EkMc79ZSU",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/f/f7/Stranger_Things_season_4.jpg",
    rating: "TV-14",
    age: "14+",
    genre: "Drama, Fantasy, Horror",
  },
  {
    title: "The Office",
    desc: "A mockumentary about the everyday lives of office employees.",
    trailer: "https://youtu.be/6inri5ggyK0",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/0/02/The_Office_US_logo.svg",
    rating: "TV-14",
    age: "13+",
    genre: "Comedy",
  },
  {
    title: "Game of Thrones",
    desc: "Noble families vie for control of the Seven Kingdoms of Westeros.",
    trailer: "https://youtu.be/KPLWWIOCOOQ",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg",
    rating: "TV-MA",
    age: "18+",
    genre: "Action, Adventure, Drama",
  },
  {
    title: "Rick and Morty",
    desc: "A cynical scientist and his good-hearted grandson go on interdimensional adventures.",
    trailer: "https://youtu.be/hl1U0bxTHbY",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/a/a6/Rick_and_Morty_season_6_poster.jpeg",
    rating: "TV-MA",
    age: "17+",
    genre: "Animation, Comedy, Sci-Fi",
  },
  {
    title: "The Mandalorian",
    desc: "A lone bounty hunter navigates the galaxy while protecting a mysterious child.",
    trailer: "https://youtu.be/aOC8E8z_ifw",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/1/1f/The_Mandalorian_season_2_poster.jpg",
    rating: "TV-14",
    age: "13+",
    genre: "Action, Adventure, Sci-Fi",
  },
  {
    title: "The Simpsons",
    desc: "An animated sitcom about the misadventures of a working-class family.",
    trailer: "https://youtu.be/HRV6tMR-SSs",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/0/0d/Simpsons_FamilyPicture.png",
    rating: "TV-PG",
    age: "10+",
    genre: "Animation, Comedy",
  },
  {
    title: "Attack on Titan",
    desc: "In a world overrun by man-eating Titans, humanity fights for survival.",
    trailer: "https://youtu.be/MGRm4IzK1SQ",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/0/0f/Attack_on_Titan_season_1_poster.jpg",
    rating: "TV-MA",
    age: "16+",
    genre: "Animation, Action, Fantasy",
  },
  {
    title: "Black Mirror",
    desc: "A sci-fi anthology series exploring the dark side of technology.",
    trailer: "https://youtu.be/2bVik34nWws",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/2/21/Black_Mirror_titlecard.jpg",
    rating: "TV-MA",
    age: "18+",
    genre: "Drama, Sci-Fi, Thriller",
  },
  {
    title: "Brooklyn Nine-Nine",
    desc: "A hilarious sitcom following the antics of a New York police precinct.",
    trailer: "https://youtu.be/HblwLcAR4r4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/92/BrooklynNineNine.jpg",
    rating: "TV-14",
    age: "13+",
    genre: "Comedy, Crime",
  },
  {
    title: "Friends",
    desc: "Six friends navigate life, love, and coffee in New York City.",
    trailer: "https://youtu.be/IEEbUzffzrk",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/b/bc/Friends_season_one_cast.jpg",
    rating: "TV-14",
    age: "13+",
    genre: "Comedy, Romance",
  },
  {
    title: "Better Call Saul",
    desc: "The journey of a small-time lawyer, Jimmy McGill, before he became Saul Goodman.",
    trailer: "https://youtu.be/HN4oydykJFc",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/c/cd/Better_Call_Saul_title_card.png",
    rating: "TV-MA",
    age: "17+",
    genre: "Crime, Drama",
  },
  {
    title: "Futurama",
    desc: "A pizza delivery guy wakes up 1000 years in the future and joins a space crew.",
    trailer: "https://youtu.be/vpGXkNXrCzU",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/3/3f/Futurama_Logo.png",
    rating: "TV-14",
    age: "14+",
    genre: "Animation, Comedy, Sci-Fi",
  },
  {
    title: "One Piece",
    desc: "A young pirate and his crew set sail to find the legendary treasure, One Piece.",
    trailer: "https://youtu.be/S8_YwFLCh4U",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/2/2c/One_Piece_Logo.svg",
    rating: "TV-14",
    age: "12+",
    genre: "Animation, Adventure, Action",
  },
  {
    title: "The Witcher",
    desc: "A monster hunter navigates a world filled with magic, beasts, and political intrigue.",
    trailer: "https://youtu.be/tjujvMkqWe4",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/b/b3/The_Witcher_title_card.png",
    rating: "TV-MA",
    age: "18+",
    genre: "Action, Adventure, Fantasy",
  },
  {
    title: "The Boys",
    desc: "A dark superhero show where vigilantes keep corrupt heroes in check.",
    trailer: "https://youtu.be/MN8fFM1ZdWo",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/5/5e/The_Boys_Season_2_poster.jpg",
    rating: "TV-MA",
    age: "18+",
    genre: "Action, Drama, Sci-Fi",
  },
  {
    title: "Invincible",
    desc: "A teenage superhero struggles with his powers and his father’s legacy.",
    trailer: "https://youtu.be/-bfAVpuko5o",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/8/89/Invincible_TV_series.png",
    rating: "TV-MA",
    age: "17+",
    genre: "Animation, Action, Drama",
  },
];



const HISTORY_sample_week = [
  { title: "spongebob", time: 54, day: "Monday" },
  { title: "spongebob", time: 43, day: "Tuesday" },
  { title: "spongebob", time: 54, day: "Wednesday" },
  { title: "spongebob", time: 13, day: "Thursday" },
  { title: "spongebob", time: 4, day: "Friday" },
  { title: "spongebob", time: 6, day: "Saturday" },
  { title: "spongebob", time: 69, day: "Sunday" },
];

var week = 0;

const getKidsProfile = () => {
  return kidsProf;
};

const setWeek = (m_week) => {
  week = m_week;
};
const getWeek = () => {
  return week;
};

const getShows = () => {
  return shows;
}

export default { getKidsProfile, setWeek, getWeek, getShows };
