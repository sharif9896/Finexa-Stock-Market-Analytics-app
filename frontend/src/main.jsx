import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage.jsx";
import Signup from "./landing_page/signup/Signup.jsx";
import AboutPage from "./landing_page/about/AboutPage.jsx";
import ProductPage from "./landing_page/products/ProductPage.jsx";
import PricingPage from "./landing_page/pricing/PricingPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import NotFound from "./landing_page/NotFound.jsx";
// import Home from "../../dashboard/src/components/Home.jsx";
// import Dashboard from "../../dashboard/src/components/Dashboard.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/signup", element: <Signup /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/product", element: <ProductPage /> },
      { path: "/support", element: <SupportPage /> },
      { path: "/pricing", element: <PricingPage /> },
      // { path: "/dashboard-op", element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>
);
