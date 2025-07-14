import './Main.css';
import Specials from './Specials.jsx';
import Testimonials from './Testimonials.jsx';
import About from './About.jsx';
import Hero from './Hero.jsx'
import BookingPage from './BookingPage.jsx';
import { Routes, Route} from "react-router-dom";
import ConfirmedBooking from './ConfirmedBooking.jsx';

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
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/bookingconfirmed" element={<ConfirmedBooking/>}/>
      </Routes>
    </div>
  );
}

export default Main;