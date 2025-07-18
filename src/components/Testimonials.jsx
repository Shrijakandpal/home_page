import './Testimonials.css';
import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
  return (
    <>
      <section className="testimonial-section">
        <div className="testimonial-header">
          <p className="testimonial-subtitle">OUR CUSTOMER REVIEW</p>
          <h2 className="testimonial-title">What Our Client Says</h2>
        </div>
      </section>

      {/* Floating Testimonial Card like BookingBar */}
      <div className="testimonial-floating-card">
        <div className="testimonial-left" />
        <div className="testimonial-right">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color="#ffc107" />
            ))}
          </div>
          <p className="testimonial-text">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam”
          </p>
          <p className="testimonial-name">Jackson Dean</p>
          <p className="testimonial-role">Guest</p>
        </div>
      </div>
      <div className="testimonial-pagination">
  <span className="dot active"></span>
  <span className="dot"></span>
  <span className="dot"></span>
</div>

      <section className="testimonial-white-section"></section>
    </>
  );
}
