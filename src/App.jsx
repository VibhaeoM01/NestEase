import Homepage from "./Routes/Homepage/Homepage"
import ListPage from "./Routes/listPage/listPage";
import  {Layout, RequireAuth} from "./Routes/layout/layout";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
// import Login from "./Routes/login/login";
import SinglePage from "./Routes/singlePage/singlePage";
import Profile from "./Routes/profile/profile";
import Register from "./Routes/register/register";
import Login from "./Routes/login/login";
import ProfileUpdatePage from "./Routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./Routes/newPostPage/newPostPage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";

function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"/",
        element:<Homepage />
      },
      {
        path:"/list",
        element:<ListPage/>,
        loader:listPageLoader,
      },
      {
        path:"/login",
        element:<Login/>
      },
    
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/:id",
        element:<SinglePage/>,
        loader:singlePageLoader,
      }
    ]
  }, 
  {
    path: "/",
    element: <RequireAuth />,
    children:[
      {
        path:"/profile",
        element:<Profile />,
        loader:profilePageLoader          
      },
      {
        path:"/profile/update",
        element:<ProfileUpdatePage />
      },
      {
        path:"/add",
        element:<NewPostPage />
      },
    ]
  }
]);


  return (
 

      <RouterProvider router={router}/>
  )
}

export default App;  