import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";
import {Home} from './components/organisms/Home'
import AllProducts from './components/organisms/allProducts';
import Details from './components/organisms/details';
import Profile from './components/organisms/Profile.jsx';
import Cart from './components/organisms/cart';
import AboutUs from './components/organisms/aboutUs';
import Faq from './components/organisms/FAQ';
import NotFound from './components/organisms/notFound';
import News from './components/organisms/news';
import Favorites from './components/organisms/favorites';
import NavBar from './components/molecules/navbar';
import SettingsMock from './components/molecules/SettingsMock';
import OrdersMock from './components/molecules/OrdersMock';
import Categories from './components/organisms/categories';
import CreateForm from './components/organisms/createForm';
import { Whatsapp } from './components/atoms/whatsapp';
import Admin from './Admin/Admin';
import { CartProvider } from './context/CartItem';
import style from "./styles/details.module.css";
import UserProfile from './components/organisms/userProfile';
import Checkout from './components/organisms/checkoutForm/Checkout';
import { withAuthenticationRequired } from '@auth0/auth0-react'
import TestCheckout from './components/organisms/checkoutForm/TestCheckout';
import TestAddresForm from './components/organisms/checkoutForm/TestAddresForm';
import Review from './components/organisms/checkoutForm/Review';


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <div>

        <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/allProducts' element={<AllProducts />} />
            <Route exact path='/details/:id' element={<Details />} />
            <Route exact path='/favorites' element={<PrivateRoute component={Favorites} />} />
            <Route exact path='/userprofile' element={<PrivateRoute component={UserProfile} />} />
            <Route exact path = '/profile' element={<PrivateRoute component={Profile} />} />
            <Route exact path = '/OrdersMock' element={<PrivateRoute component={OrdersMock}  />} />
            <Route exact path = '/Settings' element={<PrivateRoute component={SettingsMock}  />} />
            <Route exact path = '/TestCheckout' element={<PrivateRoute component={TestCheckout}  />} />
            {/* <Route exact path = '/Checkout' element={<PrivateRoute component={Checkout}  />} />  */} //esto es de prueba
            <Route exact path = '/TestAddresForm' element={<PrivateRoute component={TestAddresForm}  />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/aboutUs' element={<AboutUs />} />
            <Route exact path='/faq' element={<Faq />} />
            <Route exact path='/news' element={<News />} />
            <Route exact path='/categories' element={<Categories />} />            
            <Route exact path='*' element={<NotFound />} />
            <Route exact path = '/admin/*' element={<PrivateRoute component={Admin}/>} />
          </Routes>
        </CartProvider>
      <Whatsapp />
    </div>
  );
}

function PrivateRoute ({component}) {

  const Verifier = withAuthenticationRequired(component, {
    onRedirecting: () => (<div className={style.loader}></div>)
  })
  
  return (
    <Verifier/>
  )
}

export default App;
