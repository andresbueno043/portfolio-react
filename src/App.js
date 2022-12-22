import React from 'react';
import './App.css';
import Header from './components/header'
import Nav from './components/nav'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About />
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
