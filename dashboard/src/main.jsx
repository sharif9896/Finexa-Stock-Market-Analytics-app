import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'

// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/", element: <HomePage /> },
//       { path: "/signup", element: <Signup /> },
//       { path: "/about", element: <AboutPage /> },
//       { path: "/product", element: <ProductPage /> },
//       { path: "/support", element: <SupportPage /> },
//       { path: "/pricing", element: <PricingPage /> },
//       { path: "*", element: <NotFound /> },
//     ],
//   },
// ]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
