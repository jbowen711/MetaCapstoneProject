import './Main.css';
import Specials from './Specials.jsx';
import Testimonials from './Testimonials.jsx';
import About from './About.jsx';
import Hero from './Hero.jsx'
import { Routes, Route} from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <section id="home"><Hero /></section>
      <section id="menu"><Specials /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="about"><About /></section>
    </div>
  );
}

export default Main;