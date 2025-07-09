import Homepage from "./Routes/Homepage/Homepage"
import ListPage from "./Routes/listPage/listPage";
import {Layout, RequireAuth} from "./Routes/layout/layout";
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
import ErrorBoundary from "./components/ErrorBoundary";

// Add a simple loading component for hydration
function HydrateFallback() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontSize: '1.2rem'
    }}>
      Loading...
    </div>
  );
}

const App = () => {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    hydrateFallback: <HydrateFallback />,
    children:[
      {
        path:"/",
        element:<Homepage />
      },
      {
        path:"/list",
        element:<ListPage/>,
        loader:listPageLoader,
        errorElement: <ErrorBoundary />
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
        errorElement: <ErrorBoundary />
      }
    ]
  }, 
  {
    path: "/",
    element: <RequireAuth />,
    errorElement: <ErrorBoundary />,
    children:[
      {
        path:"/profile",
        element:<Profile />,
        loader:profilePageLoader,
        errorElement: <ErrorBoundary />          
      },
      {
        path:"/profile/update",
        element:<ProfileUpdatePage />,
        errorElement: <ErrorBoundary />
      },
      {
        path:"/add",
        element:<NewPostPage />,
        errorElement: <ErrorBoundary />
      },
    ]
  }
]);


  return (
 

      <RouterProvider router={router}/>
  )
}

export default App;  