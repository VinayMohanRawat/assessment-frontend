import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'task_1',
        element: <Task1 />
      },
      {
        path: 'task_2',
        element: <Task2 />
      }
    ]
  }
])


export default function App() {
  return <RouterProvider router={router} ></RouterProvider>
}