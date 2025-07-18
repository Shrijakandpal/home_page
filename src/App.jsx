import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingBar from './components/BookingBar.jsx';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BookingBar/>
      <Rooms/>
      <Amenities/>
      <Testimonials/>
      <Team/>
      <Footer/>
    </>
  );
}

export default App;
