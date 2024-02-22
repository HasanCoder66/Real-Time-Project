import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import SectionTwo from "./Components/SectionTwo/SectionTwo";
import Service from "./Pages/ServicesPage/Service";

const Layout = () => {
  return (
    <div className="app">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/About",
        element: <SectionTwo />,
      },
      {
        path: "/services",
        element: <Service />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
