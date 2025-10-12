import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './ui/Layout';
import Home from '../pages/home/Home';
import Privacy from '../pages/privacy/Privacy';
import AppContext from '../features/context/AppContext';
import type { ModalData } from '../features/types/ModalData';
import About from '../pages/about/About';
import Itro from '../pages/intro/Intro';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Cart from '../pages/cart/Cart';


export default function App() {

  const showModal = (data : ModalData) => {
    console.log(data);
  }
  return (
    <AppContext.Provider value={{showModal}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="privacy" element={<Privacy/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="intro" element={<Itro/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="cart" element={<Cart/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

