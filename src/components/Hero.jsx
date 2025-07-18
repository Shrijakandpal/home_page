import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <p className="tagline">Best Place To Relax & Enjoy</p>
        <h1 className="hero-heading">
          A Luxurious Way  To <br />  Enjoy Your Life
        </h1>
                <div className="discover-wrapper">
  <div className="line"></div>
  <button className="discover-btn">
    Discover Rooms <span className="arrow">&gt;</span>
  </button>
  <div className="line"></div>
</div>

    <div className="hero-arrows">
  <button className="arrow-btn">&#8592;</button>
  <button className="arrow-btn">&#8594;</button>
</div>
      </div>
    </section>
  );
}
