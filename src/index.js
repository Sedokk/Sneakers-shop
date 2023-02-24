import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SneakersLayout from "./components/sneakersLayout/SneakersLayout"

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
        element: <h1>Liked one</h1>,
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
