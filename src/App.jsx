import HomePage from "./routes/Homepage";
import ListPage from "./routes/Listpage";
import SinglePage from "./routes/layout/Singlepage";
import ProfilePage from "./routes/profilepage/Profilepage";
import Login from "./routes/layout/Login";
//import Register from "./routes/register/register";
//import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
//import NewPostPage from "./routes/newPostPage/newPostPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  Layout from "./routes/layout/Layout";
//import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";


function App() {
 
  const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          
        },
        {
          path: "/:id",
          element: <SinglePage />,
         
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
       // {
       //   path: "/register",
       //   element: <Register />,
      //  },
      ],
    },
   {/*
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  */}
  ]);

  return (
  <RouterProvider router={router} />
  )
}
export default App;