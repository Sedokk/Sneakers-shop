import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SneakersLayout from "./components/SneakersLayout/SneakersLayout"
import FavoriteLayout from "./components/FavoriteLayout/FavoriteLayout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>sorry, we got troubles</h1>,
    children: [
      {
        index: true,
        element: <SneakersLayout />,
      },
      {
        path: "/favorite",
        element: <FavoriteLayout />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
