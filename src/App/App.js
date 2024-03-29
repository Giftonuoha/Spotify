import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css';
import {Landing} from '../Pages/Landing.jsx'
import {Login} from '../Pages/Login/index.jsx'
import {IsProtectedRoute} from './hoc/IsProtectedRoute'

const router = createBrowserRouter([
  {
    path: '',
    element: <Landing/>
    
  },

  {
    path: 'login',
    element: <Login/>
  },

  
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
