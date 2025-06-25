import React from 'react';
import Nav from './pages/nav'
import Landing from './pages/landing';
import About from './pages/about';
import Footer from './pages/footer';
import Main from './pages/maincarousel';
import Service from './pages/services';
import Experts from './pages/expertise';
import Sub from './pages/sub';
import rout from './pages/Router';

function App() {
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
      <Nav />
      <Main />
      <Landing />
      <About />
      <Experts />
      <Service />
      <Sub />
      <Footer />
    </div>
  );
}

export default App;