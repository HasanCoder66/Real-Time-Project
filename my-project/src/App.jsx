import {
  createBrowserRouter,
  RouterProvider,
  Outlet,

} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import About from './Pages/AboutPage/About'
import ContactPage from "./Pages/ContactPage/ContactPage";
// import SectionTwo from "./Components/SectionTwo/SectionTwo";

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
        element: <About />,
      },
      {
        path: "/Contact",
        element: <ContactPage />,
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
