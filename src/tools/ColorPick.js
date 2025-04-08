const colorArr = ["white", "#9381ff", "#c84630"]; // This would be our color array
// The following are the colours I got from the color picking
// Website: https://coolors.co/visualizer/f5e0b7-d6ba73-8bbf9f

// The purpose of these methods are to avoid copy pasting long
// color codes
const errorColor = "#c84630"; // Some random error color in order to change things uniformly

const textCol = "white"; // Text color for buttons and shit

// TODO: border color (we are going to assume this is black as anything else is phychotic)


//const hoverCol = "#7a6dcc"; // A darker variant of the secondary color (#9381ff)
const hoverArr = ["black", "blue", "red"]; // A darker variant of the secondary color (#9381ff)
const menuHover = "grey"; 

// MAYBE TODO: background color

const getColor = () => {
  return colorArr;
};

const getPrimary = () => {
  if (colorArr.length < 0) {
    return null;
  }

  return colorArr[0];
};

const getSecondary = () => {
  if (colorArr.length < 1) {
    return null;
  }
  return colorArr[1];
};

const getThird = () => {
  if (colorArr.length < 2) {
    return null;
  }
  return colorArr[2];
};

const getWhite = () => {
  return "white";
};



const getErrorColor = () => {
  return errorColor;
}

const getTextCol = () => {
  return textCol;
}

// Time to do the hovers for something

const getPrimaryHOVER = () => {
  if (hoverArr.length < 0) {
    return null;
  }

  return hoverArr[0];
};

const getSecondaryHOVER = () => {
  if (hoverArr.length < 1) {
    return null;
  }
  return hoverArr[1];
};

const getThirdHOVER = () => {
  if (hoverArr.length < 2) {
    return null;
  }
  return hoverArr[2];
};

const getMenuHover = () => {
  return menuHover;
}

export default {
  getColor,
  getPrimary,
  getSecondary,
  getThird,
  getWhite,
  getErrorColor,
  getTextCol,
  getPrimaryHOVER,
  getSecondaryHOVER,
  getThirdHOVER,
  getMenuHover,

};
// This could be used for more colors, this seems like an easy shortcut
