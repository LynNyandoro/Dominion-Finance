import React, { useRef } from "react";
import Nav from './pages/nav';
import Home from './pages/home';
import About from './pages/about';
import Footer from './pages/footer';
import Service from './pages/services';
import Clients from './pages/clients';
import Sub from './pages/sub';
import Diaspora from "./pages/diaspora";
import Teams from "./pages/team";
import Blog from "./pages/blog";
import Faqs from "./pages/faqs";

function App() {
  const contactUsRef = useRef(null); // Create a reference for Footer
  const serviceRef = useRef(null); // Create a reference for Service

  return (
    <div
      className="App"
      style={{
        backgroundColor: '#fff',
        minHeight: '100vh',
        width: '100%',
        boxSizing: 'border-box',
        padding: '0',
        margin: '0',
      }}
    >
      <Nav contactUsRef={contactUsRef} />  {/* Pass the reference to Nav */}
      {/* <Main /> */}
      <Home serviceRef={serviceRef} />
      <About />
      <Service  ref={serviceRef} />
      <Diaspora />
      {/* <Experts /> */}
      {/* <Sub /> */}
      {/* <Footer ref={contactUsRef} />  Remove Footer reference for now */}
      <Clients />
      <Teams />
      <Blog />
      {/* <Experts /> */}
      {/* <Sub /> */}
      <Faqs />
      {/* <Footer ref={contactUsRef} />  Uncomment to include Footer */}
      <Sub />
      <Footer ref={contactUsRef} />  {/* Pass the reference to Footer */}
    </div>
  );
}

export default App;