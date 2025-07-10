import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    //Semantic HTML Structured Layout
    <Router>
      <div className="appGrid">
        <Header/>
        <Main>
        </Main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App
