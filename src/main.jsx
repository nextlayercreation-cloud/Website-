import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login.jsx'
import PageNotFound from './PageNotFound.jsx'
import Services from './services.jsx'
import AboutUs from './aboutus'
import FullGallery from './FullGallery.jsx'

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
    <RouterProvider router={router} />
  </StrictMode>
)
