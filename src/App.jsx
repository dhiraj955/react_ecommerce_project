
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { routeConfig } from './routes/routeConfig'



const router = createBrowserRouter(routeConfig)




function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
