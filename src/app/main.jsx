import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import Services from '../pages/services';
import AboutUs from '../components/aboutus';
import FullGallery from '../pages/FullGallery';
import { AuthProvider } from '../hooks/AuthContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path:'/fullgallery',
    element:<FullGallery />
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
