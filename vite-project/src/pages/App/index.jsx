import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFoud'
import { SignIn } from '../SignIn'
import { NavBar } from '../../components/navbar'
import { ShoppingCartProvider } from '../../Context'

const AppRoutes = () => {
  let routes = useRoutes([
    {path:"/",element:<Home/>},
    {path:"/My-Account",element:<MyAccount/>},
    {path:"/My-Order",element:<MyOrder/>},
    {path:"/My-Orders",element:<MyOrders/>},
    {path:"/SignIn",element:<SignIn/>},
    {path:"/*",element:<NotFound />}
  ])
  return routes
}

function App() {
  return (
    <ShoppingCartProvider>
        <BrowserRouter>
        <AppRoutes></AppRoutes>
        <NavBar></NavBar>
      </BrowserRouter>
    </ShoppingCartProvider>

  )
}

export default App
