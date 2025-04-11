// Utility functions for storing and retrieving favorites
const FAVORITES_KEY = "kiddoflix_favorites";
const RESTRICTIONS_KEY = "kiddoflix_restrictions";

export const getFavorites = (profileName) => {
  try {
    const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "{}");
    return favorites[profileName] || [];
  } catch (error) {
    console.error("Error getting favorites:", error);
    return [];
  }
};

export const saveFavorite = (profileName, show) => {
  try {
    const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "{}");
    if (!favorites[profileName]) {
      favorites[profileName] = [];
    }

    // Check if show is already favorited
    const isAlreadyFavorited = favorites[profileName].some(
      (fav) => fav.title === show.title
    );

    if (!isAlreadyFavorited) {
      favorites[profileName].push(show);
    }

    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error("Error saving favorite:", error);
  }
};

export const removeFavorite = (profileName, showTitle) => {
  try {
    const favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "{}");
    if (favorites[profileName]) {
      favorites[profileName] = favorites[profileName].filter(
        (show) => show.title !== showTitle
      );
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
  } catch (error) {
    console.error("Error removing favorite:", error);
  }
};

export const getRestrictions = (profileName) => {
  try {
    const restrictions = JSON.parse(
      localStorage.getItem(RESTRICTIONS_KEY) || "{}"
    );
    return restrictions[profileName] || [];
  } catch (error) {
    console.error("Error getting restrictions:", error);
    return [];
  }
};

export const saveRestriction = (profileName, showTitle) => {
  try {
    const restrictions = JSON.parse(
      localStorage.getItem(RESTRICTIONS_KEY) || "{}"
    );
    if (!restrictions[profileName]) {
      restrictions[profileName] = [];
    }

    // Check if show is already restricted
    const isAlreadyRestricted = restrictions[profileName].includes(showTitle);

    if (!isAlreadyRestricted) {
      restrictions[profileName].push(showTitle);
      localStorage.setItem(RESTRICTIONS_KEY, JSON.stringify(restrictions));
    }
  } catch (error) {
    console.error("Error saving restriction:", error);
  }
};

export const removeRestriction = (profileName, showTitle) => {
  try {
    const restrictions = JSON.parse(
      localStorage.getItem(RESTRICTIONS_KEY) || "{}"
    );
    if (restrictions[profileName]) {
      restrictions[profileName] = restrictions[profileName].filter(
        (title) => title !== showTitle
      );
      localStorage.setItem(RESTRICTIONS_KEY, JSON.stringify(restrictions));
    }
  } catch (error) {
    console.error("Error removing restriction:", error);
  }
};

export const isShowRestricted = (profileName, showTitle) => {
  try {
    const restrictions = JSON.parse(
      localStorage.getItem(RESTRICTIONS_KEY) || "{}"
    );
    return restrictions[profileName]?.includes(showTitle) || false;
  } catch (error) {
    console.error("Error checking restriction:", error);
    return false;
  }
};

export default {
  getFavorites,
  saveFavorite,
  removeFavorite,
  getRestrictions,
  saveRestriction,
  removeRestriction,
  isShowRestricted,
};
