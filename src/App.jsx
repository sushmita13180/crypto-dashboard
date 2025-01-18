import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Container from './components/Container'
import Transactions from './components/Transactions';
import Support from './components/Support';
import Contact from './components/Contact';

const router= createBrowserRouter([
  {
    path:'/',
    element: <Container />
  },
  {
    path:'/transactions',
    element: <Transactions />
  },
  {
    path:'/support',
    element: <Support />
  },
  {
    path:'/contact',
    element: <Contact />
  }
]);

function App() {

  return (
    <RouterProvider router={router}>
    {/* <Container /> */}
    </RouterProvider>
  )
}

export default App
