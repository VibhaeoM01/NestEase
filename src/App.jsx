import Homepage from "./Routes/Homepage/Homepage"
import ListPage from "./Routes/listPage/listPage";
import Layout from "./Routes/layout/layout";

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
        element:<ListPage/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/profile",
        element:<Profile />
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/:id",
        element:<SinglePage/>
      }
    ]
  },
]);

function App() {
  return (
 

      <RouterProvider router={router}/>
  )
}

export default App