import React from 'react';
import NavBar from './components/NavBar';
import HomeScreen from './components/HomeScreen';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomeScreen/>
      <Gallery/>
      <Pricing/>
      <ContactForm/>
      <Contact/>
    </div>
  );
}

export default App;
