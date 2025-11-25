import { Outlet } from "react-router-dom";
import "./App.css";
import HomePage from "./landing_page/home/HomePage";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <HomePage /> */}
      <Footer />
    </>
  );
}

export default App;
