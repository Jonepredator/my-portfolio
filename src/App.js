import React, { useState, useEffect } from 'react';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GlobalStyle from './GlobalStyles';
import { Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Contact from './pages/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Projects from './pages/Projects';
import Knowledge from './pages/Knowledge';
import ScrollToTop from './components/ScrollToTop';


function App() {
   const [isOpen, setIsopen] = useState(false);

   const toggle = () => {
      setIsopen(!isOpen);
   };

   useEffect(() => {
      Aos.init({});
   }, []);


   return (
      <>
         <GlobalStyle />
         <ScrollToTop />
         <Navbar toggle={toggle} />
         <Dropdown isOpen={isOpen} toggle={toggle} />
         <Switch>
            <Route path='/about' component={About} />
            <Route path='/knowledge' component={Knowledge} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
            <Route path='/' component={Home} />
         </Switch>
         <Footer />
      </>
   );
}

export default App;
