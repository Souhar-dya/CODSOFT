import { createBrowserRouter, useParams } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import PostJob from "../Pages/PostJob";
import MyJob from "../Components/MyJob";
import UpdateJob from "../Pages/UpdateJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/my-job",
        element: <MyJob />,
      },
      {
        path: "/edit-job/:id",
        element: <UpdateJob />,
        loader: ({ useParams }) => {
          fetch(`https://job-search-backend-p73z.onrender.com/all-jobs/${params.id}`);
        },
      },
    ],
  },
  
]);

export default router;
