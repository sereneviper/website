import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Projects from "./components/Projects.tsx";
import ProjectDetail from "./components/ProjectDetail.tsx";
import Blogs from "./components/Blogs.tsx";
import BlogDetail from "./components/BlogDetail.tsx";
import Resume from "./components/Resume.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AboutMe />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/projects",
        element: <Projects />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/projects/:projectId",
        element: <ProjectDetail />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/blogs/:blogId",
        element: <BlogDetail />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/resume",
        element: <Resume />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
