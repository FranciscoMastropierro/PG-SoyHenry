import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import Home from './components/organisms/Home'


function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
