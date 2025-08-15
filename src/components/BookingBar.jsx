import './BookingBar.css';

export default function BookingBar() {
  return (
    <section className="booking-bar">
      <div className="booking-field">
        <label>Check-In</label>
        <input type="date" />
      </div>
      <div className="booking-field">
        <label>Check-Out</label>
        <input type="date" />
      </div>
      <div className="booking-field">
        <label>Room</label>
        <select>
          <option>1 Room, 2 Guests</option>
          <option>2 Rooms, 4 Guests</option>
          <option>3 Rooms, 6 Guests</option>
        </select>
      </div>
      <button className="check-btn">Check Availability  </button>
    </section>
);
}