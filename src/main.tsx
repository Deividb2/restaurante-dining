import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'

// react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// pages
import Error from './assets/pages/Error/Error.tsx'
import Home from './assets/pages/Home/Home.tsx'

// rotas
const rotas = createBrowserRouter([
  {
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>,
)
