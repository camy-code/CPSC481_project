// The following are 3 methods that will return
import Home from "../pages/Home";
import About from "../pages/About"; // May not need this, gotta double take design

// New pages to add
import Login from "../pages/Login";

import Menu from "../pages/Menu";
import Create from "../pages/Create";
// Child pages
import ChildMain from "../pages/ChildWatchPages/ChildMain";
import FindShow from "../pages/ChildWatchPages/FindShow";
import ShowDetails from "../pages/ChildWatchPages/ShowDetails";
import VideoPlay from "../pages/ChildWatchPages/VideoPlay";

import ParentLogin from "../pages/ParentControls/ParentLogin";
import ParentMain from "../pages/ParentControls/ParentMain";
import ParentProfileInit from "../pages/ParentControls/ParentProfileInit";

import ParentShowDetails from "../pages/ParentControls/ShowParentDetails.js";
import ParentFindShow from "../pages/ParentControls/FindShow_Parent.js";

// I may have missed some of the neeed pages

// Kickout
import Kickout from "../pages/Kickout";

// The following are pages for admin
import Acount from "../pages/ParentControls/Acount";
import History from "../pages/ParentControls/History";
import Restrict from "../pages/ParentControls/Restrict";
import ScreenTime from "../pages/ParentControls/ScreenTime";
import ParentHome from "../pages/ParentControls/ParentHome";

// The following methods make adding more pages to our app the most stupid proof as possible.
// In order to add a page to this site we can just follow the pattern below
import { useNavigate } from "react-router-dom";

// It looks here that I just add a page here
const publicPages = [
  {
    compo: <Home />,
    path: "/",
    name: "home",
  },
  // This is the new pages I am adding
  {
    compo: <Login />,
    path: "/login",
    name: "login",
  },
  {
    compo: <Create />,
    path: "/create",
    name: "create",
  },
  {
    compo: <Menu />,
    path: "/menu",
    name: "menu",
  },
  // Below are the child pages
  {
    compo: <ChildMain />,
    path: "/childmain",
    name: "childmain",
  },
  {
    compo: <ChildMain />,
    path: "/childmain/:profileName",
    name: "childmain",
  },
  {
    compo: <FindShow />,
    path: "/findShow/:profileName",
    name: "findshow",
  },
  {
    compo: <ShowDetails />,
    path: "/showdetails/:profileName",
    name: "showdetails",
  },
  {
    compo: <VideoPlay />,
    path: "/videoplay/:profileName",
    name: "showdetails",
  },
  // Below are the parent pages
  {
    compo: <ParentLogin />,
    path: "/parentlogin/:mode",
    name: "ParentLogin",
  },
  {
    compo: <ParentMain />,
    path: "/parentmain",
    name: "ParentMain",
  },
  {
    compo: <ParentProfileInit />,
    path: "/parentprofileinit",
    name: "ParentProfileInit",
  },
  {
    compo: <ParentShowDetails />,
    path: "/showdetails_parent",
    name: "showdetails_parent",
  },
  {
    compo: <ParentFindShow />,
    path: "/parentFindShow",
    name: "parentFindShow",
  },
  // I am keeping the about page because I think that it is funny
  {
    compo: <About />,
    path: "/about",
    name: "about",
  },
  {
    compo: <Kickout />,
    path: "/kickout",
    name: "kickout",
  }
];

const authPages = [
  {
    compo: <Acount />,
    path: "/acount",
    name: "acount",
  },
  {
    compo: <History />,
    path: "/history",
    name: "history",
  },
  {
    compo: <Restrict />,
    path: "/restrict",
    name: "restrict",
  },
  {
    compo: <ScreenTime />,
    path: "/screentime",
    name: "screentime",
  },
  {
    compo: <ParentHome />,
    path: "/parenthome",
    name: "Parenthome",
  },
];

const getPublicPages = () => {
  return publicPages;
};

const getAuthPages = () => {
  return authPages;
};

const getAllPages = () => {
  return getPublicPages().concat(getAuthPages());
};

export default { getAuthPages, getPublicPages, getAllPages };
