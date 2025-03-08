const kidsProf = [
    { name: "Cam", imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjStDrFOPPPRG4vqUB28jlvvP_cPioFuqDA&s" },
    { name: "Dawson", imageURL:"https://pbs.twimg.com/media/FH5Iq-VWYAMxYCQ.jpg" },
    
  
  ];

  var week = 0;

  const getKidsProfile = () => {
    return kidsProf;
  }

  const setWeek = (m_week)=> {
    week = m_week;
  }
  const getWeek = () => {
    return week;
  }

  export default {getKidsProfile, setWeek, getWeek}