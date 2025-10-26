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
import { useState } from 'react';
import ModalView from './ui/ModalView';
import Group from '../pages/group/Group';
import Product from '../pages/product/Product';
import Toast from './ui/Toast';
import type { ToastData } from '../features/types/ToastData';
import Broker from './ui/Broker';
import type { BrokerData } from '../features/types/BrokerData';


export default function App() {
  const [modalData, setModalData] = useState<ModalData|null>(null);
  const [shownToastData, setShownToastData] = useState<ToastData|null>(null);

  const showModal = (data : ModalData|null) => {
    setModalData(data);
  };

  const showToast = (data: ToastData|null) => {
    setShownToastData(data);
    setTimeout(() => setShownToastData(null), 2000)
  };

  const enqueueToast = (data: ToastData) => {
    const brokerData: BrokerData = {
      type: "toast",
      name: "Toast: " + data.message,
      toastData: data,
      action: () => showToast(data),
      callback: (task, err) => console.log("Toast done:", task, err),
    };

    Broker.instance.enqueueTask(brokerData);
  };


  return (
    <AppContext.Provider value={{showModal, enqueueToast}}>
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
            <Route path="group/:slug" element={<Group />} />
            <Route path="product/:slug" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ModalView data={modalData}/>
      <Toast data={shownToastData}/>
    </AppContext.Provider>
  )
}