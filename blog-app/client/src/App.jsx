import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss";
import axios from "axios";
import { AuthContextProvider, AuthContext } from "./context/AuthContext"; // Add AuthContext
import { useContext } from "react"; // Add this

axios.defaults.withCredentials = true;

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// Create a wrapper that uses AuthContext
const RouterWrapper = () => {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: currentUser ? <Layout /> : <Navigate to="/login" />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/post/:id",
          element: <Single />,
        },
        {
          path: "/write",
          element: <Write />,
        },
      ],
    },
    {
      path: "/login",
      element: !currentUser ? <Login /> : <Navigate to="/" />,
    },
    {
      path: "/register",
      element: !currentUser ? <Register /> : <Navigate to="/" />,
    },
  ]);

  return <RouterProvider router={router} />;
};

function App() {
  return (
    <div className="app">
      <AuthContextProvider>
        <div className="container">
          <RouterWrapper />
        </div>
      </AuthContextProvider>
    </div>
  );
}

export default App;
