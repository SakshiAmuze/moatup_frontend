import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import RegistrationForm from "./Components/Register.js";
import Home from "./Components/Home";
import LogIn from "./Components/LoginForm/LogIn.js";
import MyNetwork from "./Components/MyNetwork.js";
import Homeinvestor from "./Components/Home/Homeinvestor.js";
import Calendar from "./Components/Calendar/Calendar.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/signin", element: <RegistrationForm /> },
      { path: "/home", element: <Home /> },
      { path: "/mynetwork", element: <MyNetwork /> },
      { path: "/selectinvestor", element: <Homeinvestor /> },
      // { path: "/messages", element: <Messages /> },
      { path: "/calendar", element: <Calendar/> },
      { path: "/login", element: <LogIn /> },
    ],
  },
]);


export default router;
