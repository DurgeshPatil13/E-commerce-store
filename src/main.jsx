import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cart from './Pages/Cart.jsx'
import Home from './Pages/Home.jsx'
import Detail from './Pages/Detail.jsx'
import Favourites from './Pages/Favourites.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contextprovider } from './services/Context.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
    {
    path:"/details/:id",
    element:<Detail/>
  },
     {
    path:"/favourites",
    element:<Favourites/>
  },
  {
    path:"/cart",
    element:<Cart/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Contextprovider>
    <RouterProvider router={router} />
</Contextprovider>

  </StrictMode>,
)
