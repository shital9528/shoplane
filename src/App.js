import './App.css';

import { Route, Routes } from 'react-router-dom'

import Cart from './pages/Cart/Cart'
import Electronics from './pages/Electronics/Electronics'
import FavoriteItems from './pages/FavoriteItems/FavoriteItems'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Header from './components/Shared/Header/Header'
import Home from './pages/Home/Home'
import Jewelery from './pages/Jewelery/Jewelery'
import Login from './pages/Login/Login'
import MensClothing from './pages/MensClothing/MensClothing'
import NotFound from './pages/NotFound/NotFound'
import SignUp from './pages/SignUp/SignUp'
import WomensClothing from './pages/WomensClothing/WomensClothing'
import SingleProduct from './pages/SingleProduct/SingleProduct';

function App() {
  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/favoriteItems' element={<FavoriteItems />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/jewelery' element={<Jewelery />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mensClothing' element={<MensClothing />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/womensClothing' element={<WomensClothing />} />
        <Route path='/singleProduct' element={<SingleProduct/>} />
      </Routes>


    </div>
  );
}

export default App;
