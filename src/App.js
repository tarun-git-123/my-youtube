import { Outlet } from "react-router-dom";
import "./App.css";
// import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from 'react-redux';
import store from './utils/store';

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
        <Provider store={store} >
          <Head/>
          {/* <RouterProvider router={router}/> */}
          <Outlet/>
        </Provider>
      </>
  );
}

export default App;
