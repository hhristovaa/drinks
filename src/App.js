import { useState } from 'react';
import Header from './components/Layout/Header';
import Drinks from './components/Drinks/Drinks';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from './components/Layout/About';
import MainContent from './components/Layout/MainContent';
import Footer from './components/Layout/Footer';

function App() {
  const [isCartOpen, setOpenCart] = useState(false);

  const openCartHandler = () => {
    setOpenCart(true);
  };

  const closeCartHandler = () => {
    setOpenCart(false);

  };

  return (
    <CartProvider>
      {isCartOpen && <Cart onClose={closeCartHandler} />}
      <Header onOpenCart={openCartHandler} />
    
      <main>

{/* <MainContent/> */}
  <Routes>
        <Route path='/' element={<Navigate  to='/about'/>}/>
        {/* <Route path='/home' element={<Navigate replace to='/home'/>}/> */}
        {/* <Route exact path='/home' element={<Header onOpenCart={openCartHandler} />}/> */}
        <Route exact path='/about/*' element={<About />}/>
        <Route exact path='/home' element={<><MainContent/><Drinks /></>}/>
   
      </Routes>
     

      </main>
      <footer>
      <Footer/>
      </footer>
  
    </CartProvider>
    
  );
}

export default App;
