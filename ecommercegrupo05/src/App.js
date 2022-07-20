import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
// import Prueba from './components/organisms/prueba'
import Home from './components/organisms/Home'


function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <div>
      {/* <Prueba /> */}
      <Home/>
    </div>
  );
}

export default App;
