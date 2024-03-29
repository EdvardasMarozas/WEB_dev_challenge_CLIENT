import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './mainPage';
import Login from './components/login/login';
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<MainPage />} />
        </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
