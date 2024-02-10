import { Outlet } from "react-router-dom";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
// import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";

import {
  faTwitter,
  faFacebook,
  faPinterest,
  faGithub,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faClockRotateLeft,
  faTv,
  faLocationArrow,
  faBagShopping,
  faMusic,
  faFilm,
  faWifi,
  faGamepad,
  faTrophy,
  faPodcast,
  faMicrophone
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faClock,
  faThumbsUp,
  faNewspaper,
  faLightbulb,
  faBell,
  faSquarePlus
} from "@fortawesome/free-regular-svg-icons";
library.add(
  faTwitter,
  faFacebook,
  faPinterest,
  faGithub,
  faWhatsapp,
  faInstagram,
  faHouse,
  faUser,
  faClockRotateLeft,
  faTv,
  faClock,
  faThumbsUp,
  faLocationArrow,
  faBagShopping,
  faMusic,
  faFilm,
  faWifi,
  faGamepad,
  faNewspaper,
  faTrophy,
  faPodcast,
  faLightbulb,
  faBell,
  faMicrophone,
  faSquarePlus
);
// import { RouterProvider, createBrowserRouter} from "react-router-dom";
// import MainContainer from "./components/MainContainer";
// import WatchPage from "./components/WatchPage";
// import SearchResults from "./components/SearchResults";

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Body/>,
//     children:[
//       {
//         path:"/",
//         element:<MainContainer/>
//       },
//       {
//         path:'/watch',
//         element:<WatchPage/>
//       },
//       {
//         path:'/results',
//         element:<SearchResults/>
//       }
//     ]
//   }
// ],{ basename: "/" })

function App() {
  return (
    <>
      <Provider store={store}>
        <Head />
        {/* <RouterProvider router={router}/> */}
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
