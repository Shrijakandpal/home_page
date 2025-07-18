import './Rooms.css';
import bedIcon from '../assets/icons/bed.png';
import bathIcon from '../assets/icons/bathtub.png';
import tvIcon from '../assets/icons/ac.png';
import wifiIcon from '../assets/icons/wifi.png';

export default function Rooms() {
  const topRooms = [
    {
      title: 'Superior Suite',
      price: '$300/Night',
      features: [bedIcon, bathIcon, tvIcon, wifiIcon],
    },
    {
      title: 'Junior Suite',
      price: '$270/Night',
      features: [bedIcon, bathIcon, tvIcon, wifiIcon],
    },
  ];

  const bottomRooms = [
    {
      title: 'Deluxe Room',
      price: '$210/Night',
      features: [bedIcon, bathIcon, tvIcon, wifiIcon],
    },
    {
      title: 'Double Room',
      price: '$180/Night',
      features: [bedIcon, bathIcon, tvIcon, wifiIcon],
    },
    {
      title: 'Family Room',
      price: '$150/Night',
      features: [bedIcon, bathIcon, tvIcon, wifiIcon],
    },
  ];

  return (
    <section className="rooms-section">
      <div className="section-heading">
        <p className="subheading">OUR ROOM CHOICES</p>
        <h2 className="main-heading">Luxury Rooms & Suites</h2>
      </div>
      <div className="room-grid top-row">
        {topRooms.map((room, idx) => (
          <div className="room-card big" key={idx}>
            <div className="room-overlay">
              <h3>{room.title}</h3>
              <p className="price">{room.price}</p>
              <hr className="underline" />
              <div className="book-row">
                <button className="book-now">Book Now &nbsp; &#8594;</button>
                <div className="icons">
                  {room.features.map((icon, i) => (
                    <img key={i} src={icon} alt="feature" className="room-icon" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="room-grid bottom-row">
        {bottomRooms.map((room, idx) => (
          <div className="room-card small" key={idx}>
            <div className="room-overlay">
              <h3>{room.title}</h3>
              <p className="price">{room.price}</p>
              <hr className="underline" />
              <div className="icons">
                {room.features.map((icon, i) => (
                  <img key={i} src={icon} alt="feature" className="room-icon" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
