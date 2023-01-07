import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About";
import AddCard from "../Pages/AddCard";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import News from "../Pages/News";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "card",
        element: <AddCard />,
      },
    ],
  },
]);
export default routes;
