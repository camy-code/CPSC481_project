// The following are 3 methods that will return 
import Home from "../pages/Home"
import About from "../pages/About" // May not need this, gotta double take design

// New pages to add
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import Create from "../pages/Create";
import ChildMain from "../pages/ChildWatchPages/ChildMain";
import ParentLogin from "../pages/ParentControls/ParentLogin";
import ParentMain from "../pages/ParentControls/ParentMain";
// I may have missed some of the neeed pages



// The following methods make adding more pages to our app the most stupid proof as possible.
// In order to add a page to this site we can just follow the pattern below
import { useNavigate } from 'react-router-dom';


// It looks here that I just add a page here
const publicPages =   [
    {
      compo: <Home/>,
      path: "/",
      name: "home"
    },
    // This is the new pages I am adding
    {
      compo: <Login/>,
      path: "/login",
      name: "login"
    },
    {
      compo: <Create/>,
      path: "/create",
      name: "create"
    },
    {
      compo: <Menu/>,
      path: "/menu",
      name: "menu"
    },
    {
      compo: <ChildMain/>,
      path: "/childmain",
      name: "childmain"
    },
    {
      compo: <ParentLogin/>,
      path: "/parentlogin",
      name: "ParentLogin"
    },
    {
      compo: <ParentMain/>,
      path: "/parentmain",
      name: "ParentMain"
    },

    // I am keeping the about page because I think that it is funny
    {
      compo: <About/>,
      path: "about",
      name: "about"
    }
  
  ]

const authPages = []

const getPublicPages = () => {
    return publicPages;
}

const getAuthPages = () => {
    return authPages;
}


const getAllPages = () => {
    return (getPublicPages()).concat(getAuthPages())
}




export default {getAuthPages, getPublicPages, getAllPages}