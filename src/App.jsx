import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar.jsx';
import { Shop } from './Pages/Products/Shop.jsx';
import { Cart } from './Pages/Cart/Cart.jsx';
import { History } from './Pages/User/History/History.jsx';
import { ShopContextProvider } from './Context/ShopContext.jsx';
import { UserProvider } from './Context/UserContext.jsx';
import Register from './Pages/User/Login-Register/Register.jsx';
import Login from './Pages/User/Login-Register/Login.jsx';
import Profile from './Pages/User/Update/Profile.jsx';


function App() {


  return (
    <div className="App">
      <UserProvider>
        <ShopContextProvider>
          <Router>
            <Navbar></Navbar>
            <Routes>
              <Route path='/' element={<Shop></Shop>}></Route>
              <Route path='/cart' element={<Cart></Cart>}></Route>
              <Route path='/user' element={<Profile></Profile>}></Route>
              <Route path='/history' element={<History></History>}></Route>
              <Route path='/register' element={<Register></Register>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
            </Routes>
          </Router>
        </ShopContextProvider>
      </UserProvider>
    </div>
  );
}

export default App

