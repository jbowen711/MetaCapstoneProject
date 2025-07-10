import './Main.css';
import Specials from './Specials.jsx';
import Testimonials from './Testimonials.jsx';
import About from './About.jsx';
import Hero from './Hero.jsx'
import Bookings from './Booking.jsx';
import { Routes, Route} from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element= {
          <>
            <section id="home"><Hero /></section>
            <section id="menu"><Specials /></section>
            <section id="testimonials"><Testimonials /></section>
            <section id="about"><About /></section>
          </>
        }
        />
        <Route path="/booking" element={<Bookings />} />
      </Routes>
    </div>
  );
}

export default Main;