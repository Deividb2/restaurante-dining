import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'

// react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// pages
import App from './App.tsx'
import Error from './assets/pages/Error/Error.tsx'
import Home from './assets/pages/Home/Home.tsx'
import Sobre from './assets/pages/Sobre/Sobre.tsx'
import Contato from './assets/pages/Contato/Contato.tsx'
import Cardapio from './assets/pages/Cardapio/Cardapio.tsx'

// rotas
const rotas = createBrowserRouter([
  {
    errorElement: <Error />,
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/sobre',
        element: <Sobre />
      },
      {
        path: '/contato',
        element: <Contato />
      },
      {
        path: '/cardapio',
        element: <Cardapio />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>,
)
