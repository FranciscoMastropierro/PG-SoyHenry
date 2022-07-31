import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";
import Home from './components/organisms/Home'
import AllProducts from './components/organisms/allProducts';
import Details from './components/organisms/details';
import Login from './components/organisms/login';
import Cart from './components/organisms/cart';
import AboutUs from './components/organisms/aboutUs';
import Faq from './components/organisms/FAQ';
import NotFound from './components/organisms/notFound';
import PaymentGateway from './components/organisms/paymentGateway';
import News from './components/organisms/news';
import Favorites from './components/organisms/favorites';
import NavBar from './components/molecules/navbar';
import Categories from './components/organisms/categories';
import CreateForm from './components/organisms/createForm';
import { Whatsapp } from './components/atoms/whatsapp';
import { CartProvider } from './context/CartItem';
// import UserProfile from './components/organisms/userProfile';
import { withAuthenticationRequired } from '@auth0/auth0-react'



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
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/favorites' element={<Favorites />} />
            <Route exact path='/paymentGateway' element={<PaymentGateway />} />
            {/* <Route 
              exact path='/paymentGateway'
              element={withAuthenticationRequired( <PaymentGateway/>,{
              onRedirecting: () => (<h1>Prueba</h1>)
            })}
            /> */}
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/aboutUs' element={<AboutUs />} />
            <Route exact path='/faq' element={<Faq />} />
            <Route exact path='/news' element={<News />} />
            <Route exact path='/categories' element={<Categories />} />
            <Route exact path='/create' element={<CreateForm />} />
            <Route exact path='*' element={<NotFound />} />
          </Routes>
        </CartProvider>
      <Whatsapp />
    </div>
  );
}

// function PrivateRoute ({element,...args}) {
//   return(
//     <Route 
//       component={withAuthenticationRequired(element,{
//         onRedirecting: () => (<h1>Prueba</h1>)
//       })}
//     />
//   )

// }

export default App;
